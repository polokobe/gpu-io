import { GPUComposer } from './GPUComposer';
import { UniformType, UniformValue, CompileTimeVars, UniformParams } from './constants';
export declare class GPUProgram {
    private readonly _composer;
    /**
     * Name of GPUProgram, used for error logging.
     */
    readonly name: string;
    private _fragmentShader;
    private readonly _fragmentShaderSource;
    private readonly _defines;
    private readonly _uniforms;
    private readonly _programs;
    private readonly _programsKeyLookup;
    /**
     * Create a GPUProgram.
     * @param composer - The current GPUComposer instance.
     * @param params - GPUProgram parameters.
     * @param params.name - Name of GPUProgram, used for error logging.
     * @param params.fragmentShader - Fragment shader source or array of sources to be joined.
     * @param params.uniforms - Array of uniforms to initialize with GPUProgram.  More uniforms can be added later with GPUProgram.setUniform().
     * @param params.defines - Compile-time #define variables to include with fragment shader.
     */
    constructor(composer: GPUComposer, params: {
        name: string;
        fragmentShader: string | string[];
        uniforms?: UniformParams[];
        defines?: CompileTimeVars;
    });
    /**
     * Compile fragment shader for GPUProgram.
     * Used internally, called only one.
     * @private
     */
    private _compile;
    /**
     * Get GLProgram associated with a specific vertex shader.
     * @private
     */
    private _getProgramWithName;
    /**
     * @private
     */
    get _defaultProgram(): WebGLProgram | undefined;
    /**
     * @private
     */
    get _defaultProgramWithUV(): WebGLProgram | undefined;
    /**
     * @private
     */
    get _defaultProgramWithNormal(): WebGLProgram | undefined;
    /**
     * @private
     */
    get _defaultProgramWithUVNormal(): WebGLProgram | undefined;
    /**
     * @private
     */
    get _segmentProgram(): WebGLProgram | undefined;
    /**
     * @private
     */
    get _layerPointsProgram(): WebGLProgram | undefined;
    /**
     * @private
     */
    get _layerVectorFieldProgram(): WebGLProgram | undefined;
    /**
     * @private
     */
    get _layerLinesProgram(): WebGLProgram | undefined;
    /**
     * Set uniform for GLProgram.
     * @private
     */
    private _setProgramUniform;
    /**
     * Set fragment shader uniform for GPUProgram.
     * @param name - Uniform name as it appears in fragment shader.
     * @param value - Uniform value.
     * @param type - Uniform type (this only needs to be set once).
     */
    setUniform(name: string, value: UniformValue, type?: UniformType): void;
    /**
     * Set internal fragment shader uniforms for GPUProgram.
     * @private
     */
    _setInternalFragmentUniforms(program: WebGLProgram, width: number, height: number): void;
    /**
     * Set vertex shader uniform for GPUProgram.
     * @private
     */
    _setVertexUniform(program: WebGLProgram, uniformName: string, value: UniformValue, type: UniformType): void;
    /**
     * Deallocate GPUProgram instance and associated WebGL properties.
     */
    dispose(): void;
}
