export function matrixMultiply(a, b) {

    return [
        a[0 ] * b[0] + a[1 ] * b[4] + a[2 ] * b[8] + a[3 ] * b[12], a[0 ] * b[1] + a[1 ] * b[5] + a[2 ] * b[9] + a[3 ] * b[13], a[0 ] * b[2] + a[1 ] * b[6] + a[2 ] * b[10] + a[3 ] * b[14], a[0 ] * b[3] + a[1 ] * b[9] + a[2 ] * b[11] + a[3 ] * b[15],
        a[4 ] * b[0] + a[5 ] * b[4] + a[6 ] * b[8] + a[7 ] * b[12], a[4 ] * b[1] + a[5 ] * b[5] + a[6 ] * b[9] + a[7 ] * b[13], a[4 ] * b[2] + a[5 ] * b[6] + a[6 ] * b[10] + a[7 ] * b[14], a[4 ] * b[3] + a[5 ] * b[9] + a[6 ] * b[11] + a[7 ] * b[15], 
        a[8 ] * b[0] + a[9 ] * b[4] + a[10] * b[8] + a[11] * b[12], a[8 ] * b[1] + a[9 ] * b[5] + a[10] * b[9] + a[11] * b[13], a[8 ] * b[2] + a[9 ] * b[6] + a[10] * b[10] + a[11] * b[14], a[8 ] * b[3] + a[9 ] * b[9] + a[10] * b[11] + a[11] * b[15], 
        a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12], a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13], a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14], a[12] * b[3] + a[13] * b[9] + a[14] * b[11] + a[15] * b[15] 
    ]
}

export function normalize(vec) {

    var magnitude = Math.sqrt(vec[0]*vec[0] + vec[1]*vec[1] + vec[2]*vec[2])

    return [
        vec[0]/magnitude,
        vec[1]/magnitude,
        vec[2]/magnitude
    ]
}

export function matrixVectorMultiply(vec, mat) {
    return [
        vec[0] * mat[0] + vec[1] * mat[4] + vec[2] * mat[8 ] + vec[3] * mat[12],
        vec[0] * mat[1] + vec[1] * mat[5] + vec[2] * mat[9 ] + vec[3] * mat[13],
        vec[0] * mat[2] + vec[1] * mat[6] + vec[2] * mat[10] + vec[3] * mat[14],
        vec[0] * mat[3] + vec[1] * mat[7] + vec[2] * mat[11] + vec[3] * mat[15],
    ]
}
/**
 * Creates a 4D rotation matrix with a 3D rotation vector.
 * @see
 * The rotation vector MUST be in degrees
 */
export function eulerAngles(rotation) {

    const toRad = 1.0 / 180.0 * 3.14159265358
    const xRadians = rotation[0] * toRad
    const yRadians = rotation[1] * toRad
    const zRadians = rotation[2] * toRad

    const xRotationMatrix = [
        Math.cos(xRadians), -Math.sin(xRadians), 0.0, 0.0,
        Math.sin(xRadians),  Math.cos(xRadians), 0.0, 0.0,
        0.0,                 0.0,                1.0, 0.0,
        0.0,                 0.0,                0.0, 1.0
    ]

    const yRotationMatrix = [
        Math.cos(yRadians), 0.0, Math.sin(yRadians), 0.0,
        0.0,                1.0, 0.0,                0.0,
       -Math.sin(yRadians), 0.0, Math.cos(yRadians), 0.0,
        0.0,                0.0, 0.0,                1.0
    ]

    const zRotationMatrix = [
        1.0, 0.0,                 0.0,                0.0,
        0.0, Math.cos(zRadians), -Math.sin(zRadians), 0.0,
        0.0, Math.sin(zRadians),  Math.cos(zRadians), 0.0,
        0.0, 0.0,                 0.0,                1.0
    ]

    const f = matrixMultiply(matrixMultiply(xRotationMatrix, yRotationMatrix), zRotationMatrix);
    return f
}