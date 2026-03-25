import { useState, useEffect, useMemo } from 'react';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
  Trophy,
  Clock,
  Calendar,
  X,
  ListTodo,
  Timer,
  Check,
} from 'lucide-react';
import { ROADMAP_DATA } from './data/roadmapData.js';

const App = () => {
  const [progress, setProgress] = useState({});
  const [expandedPhases, setExpandedPhases] = useState(['fase-1']);
  const [topicViews, setTopicViews] = useState({});
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem('aiEngineerRoadmapProgress');
    if (savedProgress) {
      try {
        setProgress(JSON.parse(savedProgress));
      } catch (e) {
        console.error('Error parsing progress', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('aiEngineerRoadmapProgress', JSON.stringify(progress));
  }, [progress]);

  const handleToggleItem = (itemId) => {
    setProgress((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleTogglePhase = (phaseId) => {
    setExpandedPhases((prev) =>
      prev.includes(phaseId) ? prev.filter((id) => id !== phaseId) : [...prev, phaseId]
    );
  };

  const setTopicView = (topicId, view) => {
    setTopicViews((prev) => ({
      ...prev,
      [topicId]: view,
    }));
  };

  const stats = useMemo(() => {
    let totalItems = 0;
    let completedItems = 0;

    ROADMAP_DATA.forEach((phase) => {
      phase.topics.forEach((topic) => {
        topic.items.forEach((item) => {
          totalItems++;
          if (progress[item.id]) {
            completedItems++;
          }
        });
      });
    });

    const percentage =
      totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);
    return { totalItems, completedItems, percentage };
  }, [progress]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center relative">
          <div className="absolute top-0 right-0 z-50 text-left">
            <button
              type="button"
              onClick={() => setIsScheduleOpen(!isScheduleOpen)}
              className="flex items-center space-x-2 bg-white border border-slate-200 shadow-sm px-3 py-2 sm:px-4 sm:py-2 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none"
            >
              {isScheduleOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Calendar className="w-5 h-5" />
              )}
              <span className="hidden sm:inline font-medium">Cronograma Global</span>
            </button>

            {isScheduleOpen && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden animate-in slide-in-from-top-2">
                <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-slate-800">Resumen de Tiempos</h3>
                </div>
                <div className="max-h-80 overflow-y-auto p-4 space-y-4">
                  {ROADMAP_DATA.map((phase) => (
                    <div
                      key={`schedule-${phase.id}`}
                      className="flex justify-between items-start"
                    >
                      <div>
                        <div className="font-semibold text-sm text-slate-800">
                          {phase.title.split(':')[0]}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 max-w-[160px] truncate">
                          {phase.title.split(':')[1]}
                        </div>
                      </div>
                      <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap">
                        {phase.estimatedWeeks} semanas
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
                  <span className="font-semibold text-sm">Tiempo Total Estimado</span>
                  <span className="font-bold text-green-400">~28 Semanas</span>
                </div>
              </div>
            )}
          </div>

          <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full mb-4 mt-12 sm:mt-0 shadow-lg shadow-blue-200">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            AI Engineer Roadmap
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Aplicación interactiva para transicionar de Backend a IA. Selecciona la pestaña{' '}
            <span className="font-semibold">&quot;Timelapse&quot;</span> en cualquier tema para ver
            tu plan de estudio diario.
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 sticky top-4 z-40">
          <div className="flex justify-between items-end mb-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">
                Progreso General
              </h2>
              <p className="text-2xl font-bold text-slate-800">
                {stats.percentage}%{' '}
                <span className="text-sm font-medium text-slate-500">completado</span>
              </p>
            </div>
            <div className="text-right text-sm text-slate-500 font-medium bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
              {stats.completedItems} / {stats.totalItems} metas
            </div>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div
              className={`h-3 rounded-full transition-all duration-700 ease-out ${
                stats.percentage === 100 ? 'bg-green-500' : 'bg-blue-600'
              }`}
              style={{ width: `${stats.percentage}%` }}
            />
          </div>
        </div>

        <div className="space-y-6">
          {ROADMAP_DATA.map((phase) => {
            const PhaseIcon = phase.icon;
            const isExpanded = expandedPhases.includes(phase.id);

            let phaseTotal = 0;
            let phaseCompleted = 0;
            phase.topics.forEach((t) =>
              t.items.forEach((i) => {
                phaseTotal++;
                if (progress[i.id]) phaseCompleted++;
              })
            );
            const isPhaseComplete = phaseTotal > 0 && phaseTotal === phaseCompleted;

            return (
              <div
                key={phase.id}
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-blue-300 shadow-xl shadow-blue-50'
                    : 'border-slate-200 shadow-sm hover:border-blue-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleTogglePhase(phase.id)}
                  className={`w-full text-left px-6 py-5 md:py-6 flex items-center justify-between focus:outline-none transition-colors ${
                    isExpanded ? 'bg-slate-50' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center space-x-5">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        isPhaseComplete
                          ? 'bg-green-100 text-green-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      <PhaseIcon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                      <h3
                        className={`text-xl md:text-2xl font-bold ${
                          isPhaseComplete
                            ? 'text-slate-500 line-through decoration-2'
                            : 'text-slate-800'
                        }`}
                      >
                        {phase.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-500 mt-1 hidden sm:block max-w-2xl">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-5">
                    <div className="hidden md:flex flex-col items-end">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Duración
                      </span>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                        {phase.estimatedWeeks} semanas
                      </span>
                    </div>
                    <span
                      className={`text-sm font-bold px-3 py-1 rounded-full border ${
                        isPhaseComplete
                          ? 'bg-green-50 border-green-200 text-green-600'
                          : 'bg-slate-50 border-slate-200 text-slate-500'
                      }`}
                    >
                      {phaseCompleted}/{phaseTotal}
                    </span>
                    <div
                      className={`p-2 rounded-full transition-colors ${
                        isExpanded ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-6 md:p-8 border-t border-slate-100 bg-slate-50/50 animate-in slide-in-from-top-4 duration-300">
                    <p className="text-sm text-slate-600 mb-6 sm:hidden">{phase.description}</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {phase.topics.map((topic) => {
                        const activeView = topicViews[topic.id] || 'checklist';

                        return (
                          <div
                            key={topic.id}
                            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col h-full"
                          >
                            <div className="mb-4">
                              <div className="flex justify-between items-start mb-3">
                                <h4 className="font-bold text-slate-800 text-lg leading-tight pr-2">
                                  {topic.title}
                                </h4>
                                <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md whitespace-nowrap">
                                  {topic.estimatedWeeks} sem
                                </span>
                              </div>

                              <div className="flex space-x-2 bg-slate-100 p-1 rounded-lg w-fit">
                                <button
                                  type="button"
                                  onClick={() => setTopicView(topic.id, 'checklist')}
                                  className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                                    activeView === 'checklist'
                                      ? 'bg-white text-blue-600 shadow-sm'
                                      : 'text-slate-500 hover:text-slate-700'
                                  }`}
                                >
                                  <ListTodo className="w-3.5 h-3.5" />
                                  <span>Checklist</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setTopicView(topic.id, 'timelapse')}
                                  className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                                    activeView === 'timelapse'
                                      ? 'bg-white text-blue-600 shadow-sm'
                                      : 'text-slate-500 hover:text-slate-700'
                                  }`}
                                >
                                  <Timer className="w-3.5 h-3.5" />
                                  <span>Timelapse</span>
                                </button>
                              </div>
                            </div>

                            {activeView === 'checklist' && (
                              <ul className="space-y-3 flex-grow animate-in fade-in duration-200">
                                {topic.items.map((item) => {
                                  const isChecked = !!progress[item.id];
                                  return (
                                    <li
                                      key={item.id}
                                      className="flex items-start space-x-3 cursor-pointer group p-2 -mx-2 rounded-lg hover:bg-slate-50 transition-colors"
                                      onClick={() => handleToggleItem(item.id)}
                                      onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                          e.preventDefault();
                                          handleToggleItem(item.id);
                                        }
                                      }}
                                      role="button"
                                      tabIndex={0}
                                    >
                                      <span className="mt-0.5 focus:outline-none flex-shrink-0">
                                        {isChecked ? (
                                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        ) : (
                                          <Circle className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors" />
                                        )}
                                      </span>
                                      <span
                                        className={`text-sm leading-snug transition-colors pt-0.5 ${
                                          isChecked
                                            ? 'text-slate-400 line-through'
                                            : 'text-slate-700 group-hover:text-slate-900'
                                        }`}
                                      >
                                        {item.text}
                                      </span>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}

                            {activeView === 'timelapse' && (
                              <div className="flex-grow pt-2 animate-in fade-in duration-200">
                                <div className="pl-6 border-l-2 border-slate-200 space-y-6 relative">
                                  {topic.items.map((item) => {
                                    const isChecked = !!progress[item.id];
                                    return (
                                      <div key={`tl-${item.id}`} className="relative">
                                        <div
                                          className={`absolute -left-[33px] top-0.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                                            isChecked ? 'border-green-500' : 'border-blue-400'
                                          }`}
                                        >
                                          {isChecked && (
                                            <Check className="w-2.5 h-2.5 text-green-500" />
                                          )}
                                        </div>

                                        <div className="flex flex-col mb-1">
                                          <span
                                            className={`text-xs font-bold inline-block px-2 py-0.5 rounded w-max mb-1 ${
                                              isChecked
                                                ? 'bg-green-50 text-green-700'
                                                : 'bg-blue-50 text-blue-700'
                                            }`}
                                          >
                                            Dedicación: {item.duration}
                                          </span>
                                          <p
                                            className={`text-sm font-medium ${
                                              isChecked
                                                ? 'text-slate-400 line-through'
                                                : 'text-slate-700'
                                            }`}
                                          >
                                            {item.text}
                                          </p>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
