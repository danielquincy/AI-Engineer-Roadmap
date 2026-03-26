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
            text: 'Vectores y matrices en ML: producto punto, norma L1/L2, proyección, multiplicación matricial y broadcasting',
          },
          {
            id: 'f1-t1-i2',
            duration: '2 Días',
            text: 'Autovalores y autovectores: interpretación geométrica, diagonalización y relación con estabilidad de transformaciones',
          },
          {
            id: 'f1-t1-i3',
            duration: '3 Días',
            text: 'SVD y PCA: reducción de dimensionalidad, varianza explicada y compresión de features con scikit-learn',
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
            text: 'Derivadas parciales, gradiente, jacobiano y regla de la cadena aplicada a redes neuronales',
          },
          {
            id: 'f1-t2-i2',
            duration: '2 Días',
            text: 'Descenso de gradiente (batch, mini-batch, SGD): learning rate, convergencia e inestabilidad numérica',
          },
          {
            id: 'f1-t2-i3',
            duration: '3 Días',
            text: 'Funciones de pérdida (MSE, MAE, Cross-Entropy), convexidad y superficies de error',
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
            text: 'Distribuciones clave (Bernoulli, Binomial, Poisson, Normal): cuándo usarlas y cómo estimar parámetros',
          },
          {
            id: 'f1-t3-i2',
            duration: '2 Días',
            text: 'Teorema de Bayes: posterior, prior y likelihood; inferencia bayesiana para clasificación simple',
          },
          {
            id: 'f1-t3-i3',
            duration: '3 Días',
            text: 'Pruebas de hipótesis (t-test, chi-cuadrado), p-value, intervalos de confianza y errores tipo I/II',
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
            text: 'NumPy avanzado: vectorización, broadcasting, máscaras booleanas y optimización de operaciones',
          },
          {
            id: 'f1-t4-i2',
            duration: '3 Días',
            text: 'Pandas/Polars: joins, groupby, window functions, feature tables limpias para entrenamiento',
          },
          {
            id: 'f1-t4-i3',
            duration: '2 Días',
            text: 'EDA reproducible con Matplotlib/Seaborn: detección de sesgos, leakage y outliers',
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
            text: 'SQL avanzado para analítica: CTEs, window functions, subqueries correlacionadas y optimización de consultas',
          },
          {
            id: 'f2-t1-i2',
            duration: '3 Días',
            text: 'PostgreSQL para ML: modelado estrella, índices B-tree/GIN, particionado y planes de ejecución (EXPLAIN)',
          },
          {
            id: 'f2-t1-i3',
            duration: '2 Días',
            text: 'Conexión Python-SQL: SQLAlchemy, transacciones, carga incremental y validación de calidad de datos',
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
            text: 'Texto crudo: limpieza, normalización Unicode, regex robustas, tokenización y deduplicación',
          },
          {
            id: 'f2-t2-i2',
            duration: '4 Días',
            text: 'Datos de imagen/audio: formatos, sampling rate, augmentations y transformación a tensores',
          },
          {
            id: 'f2-t2-i3',
            duration: '4 Días',
            text: 'Pipelines ETL/ELT: orquestación con Airflow/Prefect, idempotencia, retries y monitoreo',
          },
          {
            id: 'f2-t2-i4',
            duration: '3 Días',
            text: 'Data quality: imputación de nulos, tratamiento de outliers, drift de esquema y reglas de validación',
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
            text: 'Regresión lineal y logística: supuestos, regularización L1/L2 e interpretación de coeficientes',
          },
          {
            id: 'f3-t1-i2',
            duration: '3 Días',
            text: 'SVM (lineal/RBF): margen máximo, kernel trick, tuning de C y gamma',
          },
          {
            id: 'f3-t1-i3',
            duration: '4 Días',
            text: 'Árboles y Random Forest: criterios de partición, feature importance y control de overfitting',
          },
          {
            id: 'f3-t1-i4',
            duration: '4 Días',
            text: 'Gradient boosting con XGBoost/LightGBM: early stopping, manejo de desbalance y tuning eficiente',
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
            text: 'Clustering (K-Means, DBSCAN, HDBSCAN): selección de hiperparámetros y validación de clusters',
          },
          {
            id: 'f3-t2-i2',
            duration: '4 Días',
            text: 'Reducción de dimensionalidad (PCA, t-SNE, UMAP): visualización y preservación de estructura local/global',
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
            text: 'Feature engineering: one-hot, target encoding, escalado robusto y manejo de cardinalidad alta',
          },
          {
            id: 'f3-t3-i2',
            duration: '2 Días',
            text: 'Evaluación de clasificación: precision/recall/F1, ROC-AUC, PR-AUC y calibración de probabilidades',
          },
          {
            id: 'f3-t3-i3',
            duration: '2 Días',
            text: 'Evaluación de regresión: RMSE, MAE, MAPE, R2 y análisis de residuos',
          },
          {
            id: 'f3-t3-i4',
            duration: '2 Días',
            text: 'Validación (K-Fold/TimeSeriesSplit), leakage prevention y selección de modelo basada en experimentos',
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
            text: 'MLP y activaciones (ReLU, GELU, tanh): capacidad expresiva, saturación y flujo de gradientes',
          },
          {
            id: 'f4-t1-i2',
            duration: '4 Días',
            text: 'Backpropagation en detalle: cálculo manual de gradientes, exploding/vanishing gradients',
          },
          {
            id: 'f4-t1-i3',
            duration: '3 Días',
            text: 'Optimizadores (SGD+Momentum, RMSprop, AdamW): scheduler de learning rate y weight decay',
          },
          {
            id: 'f4-t1-i4',
            duration: '4 Días',
            text: 'Regularización: dropout, batch/layer norm, early stopping y data augmentation',
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
            text: 'PyTorch tensores: operaciones, broadcasting, device placement (CPU/GPU) y profiling básico',
          },
          {
            id: 'f4-t2-i2',
            duration: '3 Días',
            text: 'Autograd y grafo computacional: backward pass, no_grad, mixed precision y grad clipping',
          },
          {
            id: 'f4-t2-i3',
            duration: '4 Días',
            text: 'Arquitectura de modelos con `torch.nn.Module`, bloques reutilizables y bucles de entrenamiento limpios',
          },
          {
            id: 'f4-t2-i4',
            duration: '4 Días',
            text: 'Dataset/DataLoader: batching, shuffling, collate_fn y pipelines de datos reproducibles',
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
            text: 'CNNs para visión: convolución, pooling, transferencia de aprendizaje (ResNet/EfficientNet)',
          },
          {
            id: 'f4-t3-i2',
            duration: '7 Días',
            text: 'Modelado secuencial con LSTM/GRU: teacher forcing, longitud variable y evaluación temporal',
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
            text: 'Embeddings: Word2Vec/FastText a sentence embeddings (SBERT), similitud semántica y clustering',
          },
          {
            id: 'f5-t1-i2',
            duration: '5 Días',
            text: 'Atención (self/multi-head): Q-K-V, máscaras causales y costo computacional O(n2)',
          },
          {
            id: 'f5-t1-i3',
            duration: '5 Días',
            text: 'Transformer completo: encoder/decoder, positional encoding y pretraining vs fine-tuning',
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
            text: 'RAG end-to-end: chunking por estructura, overlap, metadatos y estrategia de recuperación híbrida',
          },
          {
            id: 'f5-t2-i2',
            duration: '4 Días',
            text: 'Vector DBs (pgvector, Pinecone, Milvus): indexación HNSW/IVF, filtros y persistencia',
          },
          {
            id: 'f5-t2-i3',
            duration: '4 Días',
            text: 'Búsqueda semántica: cosine/dot/euclidean, reranking (cross-encoder) y MMR',
          },
          {
            id: 'f5-t2-i4',
            duration: '3 Días',
            text: 'Evaluación de RAG: groundedness, relevancia, faithfulness; uso de RAGAS y TruLens',
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
            text: 'Orquestación de flujos LLM con LangChain/LlamaIndex: chains, routers y memoria controlada',
          },
          {
            id: 'f5-t3-i2',
            duration: '2 Días',
            text: 'Prompt engineering avanzado: few-shot, ReAct, structured output (JSON schema) y guardrails',
          },
          {
            id: 'f5-t3-i3',
            duration: '2 Días',
            text: 'Patrones de agentes: tool-use, plan-and-execute, manejo de contexto y recuperación de errores',
          },
          {
            id: 'f5-t3-i4',
            duration: '2 Días',
            text: 'MCP aplicado: diseño de servidores de herramientas, seguridad, permisos y observabilidad',
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
            text: 'Ecosistema Hugging Face: `transformers`, `datasets`, tokenizers y pipelines reproducibles',
          },
          {
            id: 'f5-t4-i2',
            duration: '5 Días',
            text: 'Fine-tuning eficiente con PEFT (LoRA/QLoRA): preparación de dataset y evaluación post-entrenamiento',
          },
          {
            id: 'f5-t4-i3',
            duration: '5 Días',
            text: 'Optimización de inferencia: cuantización (GGUF, AWQ, GPTQ), trade-offs de latencia vs calidad',
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
            text: 'Docker para ML/LLM: imágenes multi-stage, caché de dependencias y seguridad base image',
          },
          {
            id: 'f6-t1-i2',
            duration: '2 Días',
            text: 'Serving de modelos con FastAPI/gRPC: batching, timeouts, rate limits y manejo de errores',
          },
          {
            id: 'f6-t1-i3',
            duration: '3 Días',
            text: 'Inferencia asíncrona con colas (Celery/Kafka/RQ): retries, DLQ e idempotencia',
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
            text: 'Kubernetes para serving: KServe/Seldon, autoscaling, rollout progresivo y observabilidad',
          },
          {
            id: 'f6-t2-i2',
            duration: '5 Días',
            text: 'Cloud deployment: SageMaker o Vertex AI, endpoints, pipelines y gestión de costos',
          },
          {
            id: 'f6-t2-i3',
            duration: '5 Días',
            text: 'Gestión de GPU: selección de instancia, scheduling, mixed precision y optimización de throughput',
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
            text: 'Experiment tracking con MLflow/W&B: versionado de parámetros, métricas y artefactos',
          },
          {
            id: 'f6-t3-i2',
            duration: '2 Días',
            text: 'Model registry: versionado, promoción por entornos (dev/staging/prod) y trazabilidad',
          },
          {
            id: 'f6-t3-i3',
            duration: '2 Días',
            text: 'CI/CD para ML: tests de datos/modelo, retraining automático y validación antes de despliegue',
          },
          {
            id: 'f6-t3-i4',
            duration: '2 Días',
            text: 'Monitoreo en producción: data drift, concept drift, performance decay y alertas accionables',
          },
        ],
      },
    ],
  },
];

export const SPECIALIZATION_ROUTES = [
  {
    id: 'route-llm',
    title: 'LLM Engineer',
    summary:
      'Construcción de productos con modelos fundacionales: RAG, agentes, evaluación y seguridad de prompts.',
    focus: ['RAG avanzado', 'Agentes con herramientas', 'Evaluación LLM', 'Serving de inferencia'],
    stack: ['Python', 'LangChain/LlamaIndex', 'OpenAI/Anthropic/HF', 'Vector DB', 'FastAPI'],
    outcomes: [
      'Chatbots empresariales con contexto confiable',
      'Asistentes internos para productividad',
      'Copilots de soporte técnico o ventas',
    ],
  },
  {
    id: 'route-mlops',
    title: 'ML Platform / MLOps Engineer',
    summary:
      'Diseño de plataformas para entrenamiento, deployment y observabilidad de modelos en producción.',
    focus: ['Pipelines reproducibles', 'CI/CD de modelos', 'Monitoreo de drift', 'Escalado en cloud'],
    stack: ['Docker', 'Kubernetes', 'MLflow/W&B', 'Airflow/Prefect', 'AWS/GCP'],
    outcomes: [
      'Plataformas internas de ML',
      'Automatización de retraining',
      'Gobernanza y versionado de modelos',
    ],
  },
  {
    id: 'route-cv',
    title: 'Computer Vision Engineer',
    summary:
      'Sistemas de visión para detección, clasificación y análisis visual en tiempo real o batch.',
    focus: ['CNN/Transformers de visión', 'Data augmentation', 'Métricas de detección', 'Optimización edge'],
    stack: ['PyTorch', 'OpenCV', 'YOLO/Detectron2', 'ONNX/TensorRT', 'CUDA'],
    outcomes: [
      'Control de calidad industrial',
      'Sistemas de videovigilancia inteligente',
      'Clasificadores visuales para e-commerce/salud',
    ],
  },
  {
    id: 'route-applied-ml',
    title: 'Applied ML Engineer',
    summary:
      'Solución de problemas de negocio con modelos tabulares y sistemas híbridos de decisión.',
    focus: ['Feature engineering', 'Modelado clásico', 'Experimentación', 'Causalidad básica'],
    stack: ['scikit-learn', 'XGBoost/LightGBM', 'SQL', 'Pandas/Polars', 'FastAPI'],
    outcomes: [
      'Sistemas de scoring y riesgo',
      'Predicción de demanda y churn',
      'Optimización de pricing y fraude',
    ],
  },
];

export const CAREER_PATHS = [
  {
    id: 'career-junior',
    title: 'Ruta de Entrada (0-1 año)',
    profile: 'AI/ML Junior Engineer',
    responsibilities: [
      'Implementar pipelines y notebooks reproducibles',
      'Entrenar/evaluar modelos base con supervisión',
      'Construir APIs de inferencia simples',
    ],
    hiringSignals: [
      '2-3 proyectos end-to-end publicados',
      'Buen dominio de Python + SQL',
      'Capacidad de explicar decisiones de modelado',
    ],
  },
  {
    id: 'career-mid',
    title: 'Ruta de Consolidación (1-3 años)',
    profile: 'AI Engineer / LLM Engineer',
    responsibilities: [
      'Diseñar arquitectura de sistemas con IA',
      'Optimizar costo/latencia/calidad en producción',
      'Definir evaluación y monitoreo continuo',
    ],
    hiringSignals: [
      'Impacto medible en producto/negocio',
      'Experiencia con cloud y observabilidad',
      'Capacidad de liderar módulos técnicos',
    ],
  },
  {
    id: 'career-senior',
    title: 'Ruta de Liderazgo (3+ años)',
    profile: 'Senior/Lead AI Engineer o AI Architect',
    responsibilities: [
      'Definir estrategia técnica de IA de la organización',
      'Establecer estándares de seguridad y gobernanza',
      'Mentorear equipos y priorizar roadmap por impacto',
    ],
    hiringSignals: [
      'Arquitecturas escalables en producción real',
      'Ownership de decisiones transversales',
      'Visión de producto + excelencia técnica',
    ],
  },
];
