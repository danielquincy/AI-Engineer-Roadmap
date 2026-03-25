import {
  BrainCircuit,
  Database,
  Cpu,
  Network,
  Sparkles,
  ServerCog,
} from 'lucide-react';

export const ROADMAP_DATA = [
  {
    id: 'fase-1',
    title: 'Fase 1: Fundamentos Matemáticos',
    icon: BrainCircuit,
    description:
      'La base teórica. Sin esto, serás un usuario de APIs, no un AI Engineer.',
    estimatedWeeks: 4,
    topics: [
      {
        id: 'f1-t1',
        title: 'Álgebra Lineal Aplicada',
        estimatedWeeks: 1,
        items: [
          {
            id: 'f1-t1-i1',
            duration: '2 Días',
            text: 'Vectores y Matrices (Producto punto, cruz, Hadamard)',
          },
          {
            id: 'f1-t1-i2',
            duration: '2 Días',
            text: 'Autovalores y Autovectores (Eigenvalues/vectors)',
          },
          {
            id: 'f1-t1-i3',
            duration: '3 Días',
            text: 'Descomposición en Valores Singulares (SVD) y PCA',
          },
        ],
      },
      {
        id: 'f1-t2',
        title: 'Cálculo Multivariable y Optimización',
        estimatedWeeks: 1,
        items: [
          {
            id: 'f1-t2-i1',
            duration: '2 Días',
            text: 'Derivadas parciales y Regla de la Cadena',
          },
          {
            id: 'f1-t2-i2',
            duration: '2 Días',
            text: 'Descenso del Gradiente (Gradient Descent)',
          },
          {
            id: 'f1-t2-i3',
            duration: '3 Días',
            text: 'Funciones de pérdida y superficies de error',
          },
        ],
      },
      {
        id: 'f1-t3',
        title: 'Probabilidad y Estadística',
        estimatedWeeks: 1,
        items: [
          {
            id: 'f1-t3-i1',
            duration: '2 Días',
            text: 'Distribuciones de probabilidad (Normal, Binomial)',
          },
          {
            id: 'f1-t3-i2',
            duration: '2 Días',
            text: 'Teorema de Bayes e Inferencia Bayesiana',
          },
          {
            id: 'f1-t3-i3',
            duration: '3 Días',
            text: 'Pruebas de hipótesis, P-values y significancia',
          },
        ],
      },
      {
        id: 'f1-t4',
        title: 'Programación Científica (Python)',
        estimatedWeeks: 1,
        items: [
          {
            id: 'f1-t4-i1',
            duration: '2 Días',
            text: 'Numpy Avanzado: Broadcasting, Vectorización',
          },
          {
            id: 'f1-t4-i2',
            duration: '3 Días',
            text: 'Pandas: Manipulación de DataFrames, Window Functions',
          },
          {
            id: 'f1-t4-i3',
            duration: '2 Días',
            text: 'Matplotlib y Seaborn: EDA avanzado',
          },
        ],
      },
    ],
  },
  {
    id: 'fase-2',
    title: 'Fase 2: Ingeniería de Datos',
    icon: Database,
    description:
      'Preparar el terreno. Los modelos son tan buenos como los datos que consumen.',
    estimatedWeeks: 3,
    topics: [
      {
        id: 'f2-t1',
        title: 'Manipulación de Datos Estructurados',
        estimatedWeeks: 1,
        items: [
          {
            id: 'f2-t1-i1',
            duration: '2 Días',
            text: 'SQL Avanzado: CTEs, Window Functions',
          },
          {
            id: 'f2-t1-i2',
            duration: '3 Días',
            text: 'PostgreSQL: Modelado analítico, índices',
          },
          {
            id: 'f2-t1-i3',
            duration: '2 Días',
            text: 'Integración Python-SQL: SQLAlchemy, Polars',
          },
        ],
      },
      {
        id: 'f2-t2',
        title: 'Datos No Estructurados y Pipelines',
        estimatedWeeks: 2,
        items: [
          {
            id: 'f2-t2-i1',
            duration: '3 Días',
            text: 'Procesamiento de texto crudo (Regex, Tokenización)',
          },
          {
            id: 'f2-t2-i2',
            duration: '4 Días',
            text: 'Manejo de imágenes y audio a nivel de tensores',
          },
          {
            id: 'f2-t2-i3',
            duration: '4 Días',
            text: 'Construcción de pipelines ETL/ELT',
          },
          {
            id: 'f2-t2-i4',
            duration: '3 Días',
            text: 'Data Imputation: Manejo de nulos (NaN) y outliers',
          },
        ],
      },
    ],
  },
  {
    id: 'fase-3',
    title: 'Fase 3: Machine Learning Clásico',
    icon: Cpu,
    description:
      'Algoritmos estadísticos fundamentales antes de saltar a las redes neuronales.',
    estimatedWeeks: 4,
    topics: [
      {
        id: 'f3-t1',
        title: 'Modelos Supervisados',
        estimatedWeeks: 2,
        items: [
          {
            id: 'f3-t1-i1',
            duration: '3 Días',
            text: 'Regresión Lineal y Logística (Fundamentos)',
          },
          {
            id: 'f3-t1-i2',
            duration: '3 Días',
            text: 'Support Vector Machines (SVM) y Kernel Trick',
          },
          {
            id: 'f3-t1-i3',
            duration: '4 Días',
            text: 'Árboles de Decisión y Random Forests',
          },
          {
            id: 'f3-t1-i4',
            duration: '4 Días',
            text: 'Gradient Boosting: XGBoost y LightGBM',
          },
        ],
      },
      {
        id: 'f3-t2',
        title: 'Modelos No Supervisados',
        estimatedWeeks: 1,
        items: [
          {
            id: 'f3-t2-i1',
            duration: '3 Días',
            text: 'Clustering: K-Means, DBSCAN',
          },
          {
            id: 'f3-t2-i2',
            duration: '4 Días',
            text: 'Reducción de Dimensionalidad: PCA, t-SNE, UMAP',
          },
        ],
      },
      {
        id: 'f3-t3',
        title: 'Feature Engineering y Evaluación',
        estimatedWeeks: 1,
        items: [
          {
            id: 'f3-t3-i1',
            duration: '1 Día',
            text: 'Codificación categórica (One-Hot, Target)',
          },
          {
            id: 'f3-t3-i2',
            duration: '2 Días',
            text: 'Métricas Clasificación: Precisión, Recall, F1, ROC-AUC',
          },
          {
            id: 'f3-t3-i3',
            duration: '2 Días',
            text: 'Métricas Regresión: RMSE, MAE, R Cuadrado',
          },
          {
            id: 'f3-t3-i4',
            duration: '2 Días',
            text: 'Validación Cruzada (K-Fold) y mitigación de Overfitting',
          },
        ],
      },
    ],
  },
  {
    id: 'fase-4',
    title: 'Fase 4: Deep Learning y Redes Neuronales',
    icon: Network,
    description:
      'El corazón de la IA moderna. Computación basada en grafos diferenciables.',
    estimatedWeeks: 6,
    topics: [
      {
        id: 'f4-t1',
        title: 'Arquitecturas Subyacentes',
        estimatedWeeks: 2,
        items: [
          {
            id: 'f4-t1-i1',
            duration: '3 Días',
            text: 'Perceptrón Multicapa (MLP) y funciones de activación',
          },
          {
            id: 'f4-t1-i2',
            duration: '4 Días',
            text: 'Mecánica de Backpropagation (En profundidad)',
          },
          {
            id: 'f4-t1-i3',
            duration: '3 Días',
            text: 'Optimizadores: Adam, RMSprop, SGD con Momentum',
          },
          {
            id: 'f4-t1-i4',
            duration: '4 Días',
            text: 'Regularización: Dropout, Batch Normalization',
          },
        ],
      },
      {
        id: 'f4-t2',
        title: 'Frameworks Core (PyTorch)',
        estimatedWeeks: 2,
        items: [
          {
            id: 'f4-t2-i1',
            duration: '3 Días',
            text: 'Tensores: Creación, manipulación y CUDA',
          },
          {
            id: 'f4-t2-i2',
            duration: '3 Días',
            text: 'Autograd: Diferenciación automática',
          },
          {
            id: 'f4-t2-i3',
            duration: '4 Días',
            text: 'Construcción de modelos con torch.nn.Module',
          },
          {
            id: 'f4-t2-i4',
            duration: '4 Días',
            text: 'DataLoaders y DataSets',
          },
        ],
      },
      {
        id: 'f4-t3',
        title: 'Arquitecturas Especializadas',
        estimatedWeeks: 2,
        items: [
          {
            id: 'f4-t3-i1',
            duration: '7 Días',
            text: 'CNNs: Filtros, Pooling, ResNets para Visión',
          },
          {
            id: 'f4-t3-i2',
            duration: '7 Días',
            text: 'RNNs Clásicas: LSTM y GRU para secuencias',
          },
        ],
      },
    ],
  },
  {
    id: 'fase-5',
    title: 'Fase 5: NLP, Generative AI y LLMs',
    icon: Sparkles,
    description:
      'El núcleo actual de la revolución IA. Arquitectura Transformer y flujos cognitivos.',
    estimatedWeeks: 7,
    topics: [
      {
        id: 'f5-t1',
        title: 'Fundamentos de NLP Moderno',
        estimatedWeeks: 2,
        items: [
          {
            id: 'f5-t1-i1',
            duration: '4 Días',
            text: 'Word Embeddings a Sentence Embeddings',
          },
          {
            id: 'f5-t1-i2',
            duration: '5 Días',
            text: 'Mecanismos de Atención (Self & Multi-Head)',
          },
          {
            id: 'f5-t1-i3',
            duration: '5 Días',
            text: 'Arquitectura Transformer ("Attention is All You Need")',
          },
        ],
      },
      {
        id: 'f5-t2',
        title: 'RAG y Bases de Datos Vectoriales',
        estimatedWeeks: 2,
        items: [
          {
            id: 'f5-t2-i1',
            duration: '3 Días',
            text: 'Concepto de RAG y Estrategias de chunks/overlap',
          },
          {
            id: 'f5-t2-i2',
            duration: '4 Días',
            text: 'Bases Vectoriales: pgvector, Pinecone, Milvus',
          },
          {
            id: 'f5-t2-i3',
            duration: '4 Días',
            text: 'Búsqueda Semántica: Coseno, Euclidiana',
          },
          {
            id: 'f5-t2-i4',
            duration: '3 Días',
            text: 'Evaluación de RAG (RAGAS, Triada de TruLens)',
          },
        ],
      },
      {
        id: 'f5-t3',
        title: 'Frameworks, Agentes y MCP',
        estimatedWeeks: 1,
        items: [
          {
            id: 'f5-t3-i1',
            duration: '1 Día',
            text: 'Orquestación: LangChain y LlamaIndex',
          },
          {
            id: 'f5-t3-i2',
            duration: '2 Días',
            text: 'Prompting: Chain of Thought, ReAct, Few-Shot',
          },
          {
            id: 'f5-t3-i3',
            duration: '2 Días',
            text: 'Patrones de Agentes (Tool use, Plan & Execute)',
          },
          {
            id: 'f5-t3-i4',
            duration: '2 Días',
            text: 'Model Context Protocol (MCP): Integración universal',
          },
        ],
      },
      {
        id: 'f5-t4',
        title: 'Modelos Open Source y Fine-Tuning',
        estimatedWeeks: 2,
        items: [
          {
            id: 'f5-t4-i1',
            duration: '4 Días',
            text: 'Hugging Face: Transformers, Datasets',
          },
          {
            id: 'f5-t4-i2',
            duration: '5 Días',
            text: 'PEFT: LoRA y QLoRA (Fine-Tuning eficiente)',
          },
          {
            id: 'f5-t4-i3',
            duration: '5 Días',
            text: 'Cuantización de modelos (GGUF, AWQ)',
          },
        ],
      },
    ],
  },
  {
    id: 'fase-6',
    title: 'Fase 6: MLOps y Despliegue',
    icon: ServerCog,
    description:
      'Llevar los modelos a producción. Aquí brilla tu experiencia como Backend Engineer.',
    estimatedWeeks: 4,
    topics: [
      {
        id: 'f6-t1',
        title: 'Contenerización y APIs',
        estimatedWeeks: 1,
        items: [
          {
            id: 'f6-t1-i1',
            duration: '2 Días',
            text: 'Docker para ML (optimizando tamaño)',
          },
          {
            id: 'f6-t1-i2',
            duration: '2 Días',
            text: 'Servir vía APIs (FastAPI, gRPC)',
          },
          {
            id: 'f6-t1-i3',
            duration: '3 Días',
            text: 'Inferencia Asíncrona (Celery, Kafka)',
          },
        ],
      },
      {
        id: 'f6-t2',
        title: 'Orquestación y Cloud',
        estimatedWeeks: 2,
        items: [
          {
            id: 'f6-t2-i1',
            duration: '4 Días',
            text: 'Kubernetes para ML: KServe o Seldon Core',
          },
          {
            id: 'f6-t2-i2',
            duration: '5 Días',
            text: 'Despliegue AWS (SageMaker) o GCP (Vertex)',
          },
          {
            id: 'f6-t2-i3',
            duration: '5 Días',
            text: 'Gestión de recursos GPU en la nube',
          },
        ],
      },
      {
        id: 'f6-t3',
        title: 'Gestión del Ciclo de Vida (MLflow)',
        estimatedWeeks: 1,
        items: [
          {
            id: 'f6-t3-i1',
            duration: '1 Día',
            text: 'Experiment Tracking (MLflow, W&B)',
          },
          {
            id: 'f6-t3-i2',
            duration: '2 Días',
            text: 'Model Registry: Versionado de pesos',
          },
          {
            id: 'f6-t3-i3',
            duration: '2 Días',
            text: 'CI/CD para ML: Retraining pipelines',
          },
          {
            id: 'f6-t3-i4',
            duration: '2 Días',
            text: 'Monitoreo: Data Drift y Concept Drift',
          },
        ],
      },
    ],
  },
];
