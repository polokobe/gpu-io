[webgl-compute](../README.md) / GPULayer

# Class: GPULayer

## Table of contents

### Constructors

- [constructor](GPULayer.md#constructor)

### Properties

- [filter](GPULayer.md#filter)
- [glFilter](GPULayer.md#glfilter)
- [glFormat](GPULayer.md#glformat)
- [glInternalFormat](GPULayer.md#glinternalformat)
- [glNumChannels](GPULayer.md#glnumchannels)
- [glType](GPULayer.md#gltype)
- [glWrapS](GPULayer.md#glwraps)
- [glWrapT](GPULayer.md#glwrapt)
- [internalFilter](GPULayer.md#internalfilter)
- [internalType](GPULayer.md#internaltype)
- [internalWrapS](GPULayer.md#internalwraps)
- [internalWrapT](GPULayer.md#internalwrapt)
- [name](GPULayer.md#name)
- [numBuffers](GPULayer.md#numbuffers)
- [numComponents](GPULayer.md#numcomponents)
- [type](GPULayer.md#type)
- [wrapS](GPULayer.md#wraps)
- [wrapT](GPULayer.md#wrapt)
- [writable](GPULayer.md#writable)

### Accessors

- [bufferIndex](GPULayer.md#bufferindex)
- [clearValue](GPULayer.md#clearvalue)
- [currentState](GPULayer.md#currentstate)
- [height](GPULayer.md#height)
- [lastState](GPULayer.md#laststate)
- [length](GPULayer.md#length)
- [width](GPULayer.md#width)

### Methods

- [\_bindOutputBuffer](GPULayer.md#_bindoutputbuffer)
- [\_bindOutputBufferForWrite](GPULayer.md#_bindoutputbufferforwrite)
- [\_usingTextureOverrideForCurrentBuffer](GPULayer.md#_usingtextureoverrideforcurrentbuffer)
- [attachToThreeTexture](GPULayer.md#attachtothreetexture)
- [clear](GPULayer.md#clear)
- [clone](GPULayer.md#clone)
- [dispose](GPULayer.md#dispose)
- [getStateAtIndex](GPULayer.md#getstateatindex)
- [getValues](GPULayer.md#getvalues)
- [incrementBufferIndex](GPULayer.md#incrementbufferindex)
- [is1D](GPULayer.md#is1d)
- [resize](GPULayer.md#resize)
- [savePNG](GPULayer.md#savepng)
- [setFromArray](GPULayer.md#setfromarray)

## Constructors

### constructor

• **new GPULayer**(`composer`, `params`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `composer` | [`GPUComposer`](GPUComposer.md) |
| `params` | `Object` |
| `params.array?` | `number`[] \| [`GPULayerArray`](../README.md#gpulayerarray) |
| `params.clearValue?` | `number` \| `number`[] |
| `params.dimensions` | `number` \| [`number`, `number`] |
| `params.filter?` | [`GPULayerFilter`](../README.md#gpulayerfilter) |
| `params.name` | `string` |
| `params.numBuffers?` | `number` |
| `params.numComponents` | [`GPULayerNumComponents`](../README.md#gpulayernumcomponents) |
| `params.type` | [`GPULayerType`](../README.md#gpulayertype) |
| `params.wrapS?` | [`GPULayerWrap`](../README.md#gpulayerwrap) |
| `params.wrapT?` | [`GPULayerWrap`](../README.md#gpulayerwrap) |
| `params.writable?` | `boolean` |

#### Defined in

[GPULayer.ts:104](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L104)

## Properties

### filter

• `Readonly` **filter**: [`GPULayerFilter`](../README.md#gpulayerfilter)

#### Defined in

[GPULayer.ts:58](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L58)

___

### glFilter

• `Readonly` **glFilter**: `number`

#### Defined in

[GPULayer.ts:92](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L92)

___

### glFormat

• `Readonly` **glFormat**: `number`

#### Defined in

[GPULayer.ts:83](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L83)

___

### glInternalFormat

• `Readonly` **glInternalFormat**: `number`

#### Defined in

[GPULayer.ts:82](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L82)

___

### glNumChannels

• `Readonly` **glNumChannels**: `number`

#### Defined in

[GPULayer.ts:89](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L89)

___

### glType

• `Readonly` **glType**: `number`

#### Defined in

[GPULayer.ts:86](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L86)

___

### glWrapS

• `Readonly` **glWrapS**: `number`

#### Defined in

[GPULayer.ts:95](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L95)

___

### glWrapT

• `Readonly` **glWrapT**: `number`

#### Defined in

[GPULayer.ts:98](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L98)

___

### internalFilter

• `Readonly` **internalFilter**: [`GPULayerFilter`](../README.md#gpulayerfilter)

#### Defined in

[GPULayer.ts:91](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L91)

___

### internalType

• `Readonly` **internalType**: [`GPULayerType`](../README.md#gpulayertype)

#### Defined in

[GPULayer.ts:85](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L85)

___

### internalWrapS

• `Readonly` **internalWrapS**: [`GPULayerWrap`](../README.md#gpulayerwrap)

#### Defined in

[GPULayer.ts:94](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L94)

___

### internalWrapT

• `Readonly` **internalWrapT**: [`GPULayerWrap`](../README.md#gpulayerwrap)

#### Defined in

[GPULayer.ts:97](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L97)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[GPULayer.ts:55](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L55)

___

### numBuffers

• `Readonly` **numBuffers**: `number`

#### Defined in

[GPULayer.ts:67](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L67)

___

### numComponents

• `Readonly` **numComponents**: [`GPULayerNumComponents`](../README.md#gpulayernumcomponents)

#### Defined in

[GPULayer.ts:57](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L57)

___

### type

• `Readonly` **type**: [`GPULayerType`](../README.md#gpulayertype)

#### Defined in

[GPULayer.ts:56](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L56)

___

### wrapS

• `Readonly` **wrapS**: [`GPULayerWrap`](../README.md#gpulayerwrap)

#### Defined in

[GPULayer.ts:59](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L59)

___

### wrapT

• `Readonly` **wrapT**: [`GPULayerWrap`](../README.md#gpulayerwrap)

#### Defined in

[GPULayer.ts:60](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L60)

___

### writable

• `Readonly` **writable**: `boolean`

#### Defined in

[GPULayer.ts:61](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L61)

## Accessors

### bufferIndex

• `get` **bufferIndex**(): `number`

#### Returns

`number`

#### Defined in

[GPULayer.ts:384](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L384)

___

### clearValue

• `get` **clearValue**(): `number` \| `number`[]

#### Returns

`number` \| `number`[]

#### Defined in

[GPULayer.ts:468](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L468)

• `set` **clearValue**(`clearValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clearValue` | `number` \| `number`[] |

#### Returns

`void`

#### Defined in

[GPULayer.ts:472](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L472)

___

### currentState

• `get` **currentState**(): `WebGLTexture`

#### Returns

`WebGLTexture`

#### Defined in

[GPULayer.ts:401](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L401)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[GPULayer.ts:542](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L542)

___

### lastState

• `get` **lastState**(): `WebGLTexture`

#### Returns

`WebGLTexture`

#### Defined in

[GPULayer.ts:405](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L405)

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[GPULayer.ts:546](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L546)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[GPULayer.ts:538](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L538)

## Methods

### \_bindOutputBuffer

▸ **_bindOutputBuffer**(): `void`

#### Returns

`void`

#### Defined in

[GPULayer.ts:413](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L413)

___

### \_bindOutputBufferForWrite

▸ **_bindOutputBufferForWrite**(`incrementBufferIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `incrementBufferIndex` | `boolean` |

#### Returns

`void`

#### Defined in

[GPULayer.ts:423](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L423)

___

### \_usingTextureOverrideForCurrentBuffer

▸ **_usingTextureOverrideForCurrentBuffer**(): `undefined` \| `WebGLTexture`

#### Returns

`undefined` \| `WebGLTexture`

#### Defined in

[GPULayer.ts:249](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L249)

___

### attachToThreeTexture

▸ **attachToThreeTexture**(`texture`): `void`

Attach the output buffer of this GPULayer to a Threejs Texture object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture` | `Texture` | Threejs texture object. |

#### Returns

`void`

#### Defined in

[GPULayer.ts:752](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L752)

___

### clear

▸ **clear**(`applyToAllBuffers?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `applyToAllBuffers` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[GPULayer.ts:480](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L480)

___

### clone

▸ **clone**(`name?`): [`GPULayer`](GPULayer.md)

Create a deep copy of GPULayer with current state copied over.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of new GPULayer as string. |

#### Returns

[`GPULayer`](GPULayer.md)

- Deep copy.

#### Defined in

[GPULayer.ts:813](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L813)

___

### dispose

▸ **dispose**(): `void`

Deallocate GPULayer instance and associated WebGL properties.

#### Returns

`void`

#### Defined in

[GPULayer.ts:795](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L795)

___

### getStateAtIndex

▸ **getStateAtIndex**(`index`): `WebGLTexture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`WebGLTexture`

#### Defined in

[GPULayer.ts:393](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L393)

___

### getValues

▸ **getValues**(): [`GPULayerArray`](../README.md#gpulayerarray)

#### Returns

[`GPULayerArray`](../README.md#gpulayerarray)

#### Defined in

[GPULayer.ts:557](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L557)

___

### incrementBufferIndex

▸ **incrementBufferIndex**(): `void`

#### Returns

`void`

#### Defined in

[GPULayer.ts:388](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L388)

___

### is1D

▸ **is1D**(): `boolean`

#### Returns

`boolean`

#### Defined in

[GPULayer.ts:553](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L553)

___

### resize

▸ **resize**(`dimensions`, `array?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `number` \| [`number`, `number`] |
| `array?` | `number`[] \| [`GPULayerArray`](../README.md#gpulayerarray) |

#### Returns

`void`

#### Defined in

[GPULayer.ts:453](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L453)

___

### savePNG

▸ **savePNG**(`params`): `void`

Save the current state of this GPULayer to png.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.callback` | (`data`: `string` \| `Blob`, `filename?`: `string`) => `void` |
| `params.dpi?` | `number` |
| `params.filename` | `string` |
| `params.multiplier?` | `number` |

#### Returns

`void`

#### Defined in

[GPULayer.ts:692](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L692)

___

### setFromArray

▸ **setFromArray**(`array`, `applyToAllBuffers?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | `number`[] \| [`GPULayerArray`](../README.md#gpulayerarray) | `undefined` |
| `applyToAllBuffers` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[GPULayer.ts:437](https://github.com/amandaghassaei/webgl-compute/blob/f4996f0/src/GPULayer.ts#L437)