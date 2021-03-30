import { GLCompute } from './GLCompute';
const SingleColorFragShader = require('./kernels/SingleColorFragShader.glsl');
const PointsVertexShader = require('./kernels/PointsVertexShader.glsl');
const PointsVertexShaderWithDisplacement = require('./kernels/PointsVertexShaderWithDisplacement.glsl');
const PassThroughFragmentShader = require('./kernels/PassThroughFragmentShader.glsl');

export {
	GLCompute,
	SingleColorFragShader,
	PointsVertexShader,
	PointsVertexShaderWithDisplacement,
	PassThroughFragmentShader,
};