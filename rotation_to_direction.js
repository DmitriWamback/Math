// transforms a rotation 0-360˚ in 3D space to a 3D direction vector
import * as matrix from './matrixutil.js'

function toDirection(rotation) {

    const mat = matrix.eulerAngles(rotation)
    const translation = [0.0, 0.0, 1.0]
    const tMat = matrix.translate(translation)
    const m = matrix.matrixMultiply(matrix.eulerAngles(rotation), tMat)
    const computed = matrix.matrixVectorMultiply([0.0, 0.0, 1.0, 1.0], m)

    const direction3D = [computed[0], computed[1], computed[2]]
    return direction3D
}

var rotationdeg = [80.0, 90.0, 110.0]
var d = toDirection(rotationdeg)

console.log(d)