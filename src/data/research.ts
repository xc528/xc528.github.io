// Concise public summaries; full original Markdown research notes are preserved.
export const researchSummaries: Record<string, { title: string; summary: string; diagram: string; alt: string; caption: string }> = {
  'virtual-acoustics': {
    title: 'Exploring Virtual Acoustics Algorithms in the SpatialScaper Framework: Effects on Sound Event Localization Model Training',
    summary: 'My master’s thesis investigated how simulated room acoustics shape the synthetic audio used to train machines to locate and identify sounds. Working within SpatialScaper, the research examined the Image Source Method (ISM), Scattering Delay Networks (SDN), and hybrid reverberation approaches. The central question was how these choices in dataset generation affect sound event localization and detection (SELD) model performance — connecting the character of a virtual acoustic space with what a listening system learns.',
    diagram: 'images/virtual-acoustics-overview.svg',
    alt: 'Conceptual research workflow: ISM, SDN and hybrid room simulation feed synthetic sound scenes, followed by model training and SELD evaluation.',
    caption: 'Conceptual workflow / Virtual acoustics and machine listening',
  },
  'audio-ml-clip2': {
    title: 'Cadenza CLIP2 Audio Machine Learning Experiments',
    summary: 'These independent experiments use the Cadenza CLIP2 baseline and dataset to investigate lyric intelligibility prediction: how understandable sung words may be to a listener. The work examines audio representations, regression models, and hearing-loss severity information, bringing together signal-based features and listener-related context. It reflects my broader interest in how machine learning can describe aspects of musical listening. This is independent exploratory work, rather than a competition submission or a claim of published challenge results.',
    diagram: 'images/lyric-intelligibility-overview.svg',
    alt: 'Conceptual research inputs: audio representations and hearing-loss severity information feed regression models for lyric intelligibility prediction.',
    caption: 'Conceptual workflow / Audio, listener context and intelligibility',
  },
};
