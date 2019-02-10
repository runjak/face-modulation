import * as faceApi from 'face-api.js';

const models = {
  SsdMobileNetV1: 'loadSsdMobilenetv1Model',
  TinyFaceDetector: 'loadTinyFaceDetectorModel',
  Mtcnn: 'loadMtcnnModel',
  FaceLandmark: 'loadFaceLandmarkModel',
  FaceLandmarkTiny: 'loadFaceLandmarkTinyModel',
  FaceRecognition: 'loadFaceRecognitionModel',
  FaceExpression: 'loadFaceExpressionModel',
};

async function loadModel(models, path = '/models') {
  await Promise.all(models.map(model => faceApi[model](path)));
}

export async function detectFaces(source) {
  return; // FIXME DISABLE BELOW FOR NOW

  await loadModel([
    models.SsdMobileNetV1,
    models.FaceExpression,
  ]);

  const things = await faceApi.detectAllFaces(source).withFaceExpressions();

  console.log('got things', things);
}