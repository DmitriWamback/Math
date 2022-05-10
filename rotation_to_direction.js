// transforms a rotation 0-360˚ in 3D space to a 3D direction vector
import * as matrix from './matrixutil.js'

function toDirection(rotation) {

    const mat = matrix.eulerAngles(rotation)
    const direction4D = [0.0, 0.0, 1.0, 1.0]
    const computed = matrix.matrixVectorMultiply(direction4D, mat)

    const direction3D = [Math.floor(computed[0]), Math.floor(computed[1]), Math.floor(computed[2])]
    return matrix.normalize(direction3D)
}

var rotationdeg = [0.0, 90.0, 0.0]
var d = toDirection(rotationdeg)

console.log(d)