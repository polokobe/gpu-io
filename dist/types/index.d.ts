import * as utils from './utils';
import { GPUComposer } from './GPUComposer';
import { GPULayer } from './GPULayer';
import { GPUProgram } from './GPUProgram';
/**
 * @private
 */
declare const _testing: {
    texturePolyfill(shaderSource: string): string;
    initArrayForType(type: import("./constants").GPULayerType, length: number, halfFloatsAsFloats?: boolean): Float32Array | Uint16Array | Uint8Array | Int8Array | Int16Array | Uint32Array | Int32Array;
    calcGPULayerSize(size: number | [number, number], name: string, verboseLogging: boolean): {
        width: number;
        height: number;
        length: number;
    } | {
        width: number;
        height: number;
        length?: undefined;
    };
    getGPULayerInternalWrap(params: {
        composer: GPUComposer;
        wrap: import("./constants").GPULayerWrap;
        internalFilter: import("./constants").GPULayerFilter;
        internalType: import("./constants").GPULayerType;
        name: string;
    }): "REPEAT" | "CLAMP_TO_EDGE";
    getGPULayerInternalFilter(params: {
        composer: GPUComposer;
        filter: import("./constants").GPULayerFilter;
        internalType: import("./constants").GPULayerType;
        name: string;
    }): import("./constants").GPULayerFilter;
    shouldCastIntTypeAsFloat(composer: GPUComposer, type: import("./constants").GPULayerType): boolean;
    getGLTextureParameters(params: {
        composer: GPUComposer;
        name: string;
        numComponents: import("./constants").GPULayerNumComponents;
        internalType: import("./constants").GPULayerType;
        writable: boolean;
    }): {
        glFormat: number;
        glInternalFormat: number;
        glType: number;
        glNumChannels: number;
    };
    testWriteSupport(composer: GPUComposer, internalType: import("./constants").GPULayerType): boolean;
    testFilterWrap(composer: GPUComposer, internalType: import("./constants").GPULayerType, filter: import("./constants").GPULayerFilter, wrap: import("./constants").GPULayerWrap): boolean;
    getGPULayerInternalType(params: {
        composer: GPUComposer;
        type: import("./constants").GPULayerType;
        writable: boolean;
        name: string;
    }): import("./constants").GPULayerType;
    minMaxValuesForType(type: import("./constants").GPULayerType): {
        min: number;
        max: number;
    };
    validateGPULayerArray(array: number[] | import("./constants").GPULayerArray, layer: GPULayer): import("./constants").GPULayerArray;
    isValidDataType(type: string): boolean;
    isValidFilter(type: string): boolean;
    isValidWrap(type: string): boolean;
    isValidTextureFormat(type: string): boolean;
    isValidTextureType(type: string): boolean;
    isValidClearValue(clearValue: number | number[], numComponents: number, type: import("./constants").GPULayerType): boolean;
    isNumberOfType(value: any, type: import("./constants").GPULayerType): boolean;
    isNumber(value: any): boolean;
    isInteger(value: any): boolean;
    isPositiveInteger(value: any): boolean;
    isNonNegativeInteger(value: any): boolean;
    isString(value: any): boolean;
    isArray(value: any): boolean;
    isObject(value: any): boolean;
    isBoolean(value: any): boolean;
    typecastVariable(shaderSource: string, variableName: string, type: string): string;
    glsl1VertexIn(shaderSource: string): string;
    castVaryingToFloat(shaderSource: string): string;
    glsl1VertexOut(shaderSource: string): string;
    glsl1FragmentIn(shaderSource: string): string;
    getFragmentOutType(shaderSource: string, name: string): "vec2" | "ivec2" | "float" | "int" | "vec3" | "vec4" | "ivec3" | "ivec4" | "uvec2" | "uvec3" | "uvec4";
    glsl1FragmentOut(shaderSource: string, name: string): string;
    checkFragmentShaderForFragColor(shaderSource: string, glslVersion: import("./constants").GLSLVersion, name: string): boolean;
    glsl1Texture(shaderSource: string): string;
    glsl1Sampler2D(shaderSource: string): string;
    glsl1Uint(shaderSource: string): string;
    highpToMediump(shaderSource: string): string;
    stripVersion(shaderSource: string): string;
    stripPrecision(shaderSource: string): string;
    stripComments(shaderSource: string): string;
    getSampler2DsInProgram(shaderSource: string): string[];
    getExtension(composer: GPUComposer, extensionName: string, optional?: boolean): any;
    OES_TEXTURE_FLOAT: "OES_texture_float";
    OES_TEXTURE_HALF_FLOAT: "OES_texture_half_float";
    OES_TEXTURE_FLOAT_LINEAR: "OES_texture_float_linear";
    OES_TEXTURE_HAlF_FLOAT_LINEAR: "OES_texture_half_float_linear";
    WEBGL_DEPTH_TEXTURE: "WEBGL_depth_texture";
    EXT_COLOR_BUFFER_FLOAT: "EXT_color_buffer_float";
    EXT_COLOR_BUFFER_HALF_FLOAT: "EXT_color_buffer_half_float";
    isFloatType: typeof utils.isFloatType;
    isUnsignedIntType: typeof utils.isUnsignedIntType;
    isSignedIntType: typeof utils.isSignedIntType;
    isIntType: typeof utils.isIntType;
    makeShaderHeader: typeof utils.makeShaderHeader;
    compileShader: typeof utils.compileShader;
    initGLProgram: typeof utils.initGLProgram;
    readyToRead: typeof utils.readyToRead;
    preprocessVertexShader: typeof utils.preprocessVertexShader;
    preprocessFragmentShader: typeof utils.preprocessFragmentShader;
    isPowerOf2: typeof utils.isPowerOf2;
    initSequentialFloatArray: typeof utils.initSequentialFloatArray;
    uniformInternalTypeForValue: typeof utils.uniformInternalTypeForValue;
};
export * from './constants';
declare const isWebGL2: typeof utils.isWebGL2, isWebGL2Supported: typeof utils.isWebGL2Supported, isHighpSupportedInVertexShader: typeof utils.isHighpSupportedInVertexShader, isHighpSupportedInFragmentShader: typeof utils.isHighpSupportedInFragmentShader, getVertexShaderMediumpPrecision: typeof utils.getVertexShaderMediumpPrecision, getFragmentShaderMediumpPrecision: typeof utils.getFragmentShaderMediumpPrecision;
export { GPUComposer, GPULayer, GPUProgram, isWebGL2, isWebGL2Supported, isHighpSupportedInVertexShader, isHighpSupportedInFragmentShader, getVertexShaderMediumpPrecision, getFragmentShaderMediumpPrecision, _testing, };
