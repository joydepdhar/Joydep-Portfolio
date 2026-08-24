/**
 * Research data — every fact below comes directly from the CV.
 * Do not add claims (publications, grants, citations…) that are not on the CV.
 */

export const researchInterests = [
  {
    title: 'Computer Vision',
    description:
      'Understanding and interpreting visual information using deep learning.',
  },
  {
    title: 'Deep Learning',
    description:
      'Developing neural-network-based solutions for complex visual recognition problems.',
  },
  {
    title: 'Anomaly Detection',
    description:
      'Detecting unusual or potentially harmful events from visual data.',
  },
  {
    title: 'Real-Time Surveillance Systems',
    description:
      'Building intelligent systems capable of analysing CCTV/video streams in real time.',
  },
  {
    title: 'Convolutional Neural Networks',
    description:
      'Applying CNN architectures and transfer learning to image and video classification.',
  },
]

export const thesis = {
  title: 'Criminal Activity Detection in Real-Time Footage',
  type: 'Undergraduate Thesis Research',
  period: '2023–2024',
  institution: 'American International University-Bangladesh (AIUB)',
  supervisor: 'Md. Faruk Abdullah Al Sohan',
  supervisorRole: 'Lecturer, Computer Science',
  focus:
    'Leveraging machine learning and deep learning for accurate criminal activity recognition from real-time CCTV footage.',

  abstract: [
    'For my undergraduate thesis at the American International University-Bangladesh, I developed a deep-learning pipeline for recognizing criminal and anomalous activities in real-time CCTV footage. The system was designed to classify video content across 14 crime and activity categories using the UCF Crime dataset.',
    'Video frames were extracted, normalized for brightness, contrast and sharpness, and augmented through rotation, zoom, flip and shear operations before being passed to convolutional neural networks trained with transfer learning. Two architectures — ResNet-50 and VGG-19 — were benchmarked under identical experimental conditions.',
    'ResNet-50 achieved 91.56% test accuracy (76.97% validation accuracy) and delivered over 90% per-class accuracy on almost all 14 classes, substantially outperforming VGG-19 at 58%. The trained model was additionally evaluated on live CCTV footage, where it correctly classified several events — including arrest, robbery, shoplifting, explosion, abuse and normal activity — in real time.',
  ],

  problem:
    'Manual monitoring of CCTV networks does not scale: operators cannot reliably watch dozens of feeds simultaneously, and anomalous events are frequently noticed only after the fact. The research problem was to automatically identify unusual or criminal activities directly from live video streams — a task made difficult by wide intra-class variation, class imbalance, and the strict latency requirements of real-time surveillance.',

  dataset: {
    name: 'UCF Crime Dataset',
    frames: 777653,
    framesLabel: '777,653 frames',
    trainSplit: 85.7,
    testSplit: 14.3,
    categoriesCount: 14,
  },

  preprocessing: [
    'Brightness normalization',
    'Contrast normalization',
    'Sharpness normalization',
    'Rotation ±20°',
    'Zoom',
    'Flip',
    'Shear',
    'Pixel scaling to [0,1]',
  ],
}


Object.assign(thesis, {
  results: {
    resnet50: { model: 'ResNet-50', role: 'Proposed model', testAccuracy: 91.56 },
    vgg19: { model: 'VGG-19', role: 'Benchmark', testAccuracy: 58 },
    validationAccuracy: 76.97,
    perClassNote:
      'ResNet-50 achieved over 90% per-class accuracy on almost all 14 crime classes.',
    comparisonNote:
      'ResNet-50 significantly outperformed VGG-19 on the reported experimental setup.',
  },

  evaluationMetrics: [
    {
      name: 'Precision',
      formula: 'TP / (TP + FP)',
      purpose:
        'Measures how many of the events predicted as a given crime truly belong to that class.',
    },
    {
      name: 'Recall',
      formula: 'TP / (TP + FN)',
      purpose:
        'Captures how many real occurrences of an event the model successfully detects.',
    },
    {
      name: 'F1-Score',
      formula: '2 · P · R / (P + R)',
      purpose:
        'Harmonic mean of precision and recall — useful when false positives and false negatives both matter.',
    },
    {
      name: 'AUC-ROC',
      formula: 'Area under ROC curve',
      purpose:
        'Summarizes discrimination ability across classification thresholds.',
    },
  ],
  evaluationNote:
    'These metrics were used to evaluate the trained models during the thesis experiments. Per-metric numerical scores are reported in the undergraduate thesis itself.',

  liveValidation: {
    intro:
      'The trained model was tested on live CCTV footage and correctly classified several events in real time:',
    events: ['Arrest', 'Robbery', 'Shoplifting', 'Explosion', 'Abuse', 'Normal'],
  },

  categories: [
    'Abuse',
    'Arrest',
    'Arson',
    'Assault',
    'Burglary',
    'Explosion',
    'Fighting',
    'Road Accidents',
    'Robbery',
    'Shooting',
    'Shoplifting',
    'Stealing',
    'Vandalism',
    'Normal',
  ],

  contributions: [
    'Developed a deep-learning pipeline for real-time anomalous activity detection.',
    'Benchmarked ResNet-50 against VGG-19.',
    'Evaluated performance across 14 activity categories.',
    'Applied image preprocessing and augmentation techniques.',
    'Evaluated using multiple classification metrics.',
    'Validated the model using live CCTV footage.',
    'Reviewed 19 previous crime-detection systems.',
  ],
})

/** Thesis methodology pipeline (Section: Methodology). */
export const thesisPipeline = [
  { label: 'CCTV / Video', detail: 'Live surveillance footage as system input' },
  { label: 'Frame Extraction', detail: 'Decomposing video streams into frames' },
  {
    label: 'Pre-processing',
    detail: 'Brightness, contrast & sharpness normalization',
  },
  { label: 'Data Augmentation', detail: 'Rotation ±20°, zoom, flip, shear' },
  {
    label: 'CNN / Transfer Learning',
    detail: 'Pretrained convolutional backbones fine-tuned on extracted frames',
  },
  { label: 'ResNet-50', detail: 'Primary architecture for classification' },
  { label: 'Classification', detail: 'Prediction over 14 activity categories' },
  { label: 'Real-Time Prediction', detail: 'Inference on live CCTV streams' },
]

/** High-level research workflow (research overview). */
export const researchPipeline = [
  { label: 'Dataset', detail: 'UCF Crime Dataset — 777,653 frames' },
  { label: 'Frame Processing', detail: 'Frames prepared from raw video' },
  { label: 'Pre-processing', detail: 'Normalization for stable training' },
  { label: 'Augmentation', detail: 'Geometric & photometric transforms' },
  { label: 'Transfer Learning', detail: 'Pretrained CNN backbones' },
  { label: 'ResNet-50 / VGG-19', detail: 'Two architectures benchmarked' },
  { label: 'Training', detail: 'Fine-tuning on the training split' },
  { label: 'Evaluation', detail: 'Accuracy, precision, recall, F1, AUC-ROC' },
  { label: 'Real-Time CCTV Testing', detail: 'Validation on live footage' },
]
