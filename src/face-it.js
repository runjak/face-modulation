import * as faceApi from 'face-api.js';

async function loadModel() {
  await faceApi.loadSsdMobilenetv1Model('/models');
  // accordingly for the other models:
  // await faceApi.loadTinyFaceDetectorModel('/models')
  // await faceApi.loadMtcnnModel('/models')
  // await faceApi.loadFaceLandmarkModel('/models')
  // await faceApi.loadFaceLandmarkTinyModel('/models')
  // await faceApi.loadFaceRecognitionModel('/models')
  // await faceApi.loadFaceExpressionModel('/models')
}

export async function detectFaces(source) {
  console.log('detectFaces(', source, ')');

  await loadModel();

  console.log('model loaded.');

  const things = await faceApi.detectAllFaces(source);

  console.log('got things', things);
}