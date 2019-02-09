#!/bin/bash

echo "Downloading models…"
cd public/models

wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/face_expression_model-shard1"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/face_expression_model-weights_manifest.json"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/face_landmark_68_model-shard1"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/face_landmark_68_model-weights_manifest.json"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/face_landmark_68_tiny_model-shard1"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/face_landmark_68_tiny_model-weights_manifest.json"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/face_recognition_model-shard1"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/face_recognition_model-shard2"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/face_recognition_model-weights_manifest.json"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/mtcnn_model-shard1"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/mtcnn_model-weights_manifest.json"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/ssd_mobilenetv1_model-shard1"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/ssd_mobilenetv1_model-shard2"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/ssd_mobilenetv1_model-weights_manifest.json"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/tiny_face_detector_model-shard1"
wget "https://github.com/justadudewhohacks/face-api.js/raw/master/weights/tiny_face_detector_model-weights_manifest.json"