const { deleteFile } = require('../../utils/File/deleteFile');

const validateSchema = (schema) => async (req, res, next) => {
    // Validar el cuerpo de la solicitud con el esquema proporcionado
    const { error } = schema.validate(req.body);

    if (error) {
        if (req.file) {
            try {
                // Eliminar la imagen subida si existe
                await deleteFile(req.file.path);
            } catch (err) {
                // Devolver un error HTTP 500 en caso de fallo de conexión o de petición
                err.statusCode = err.statusCode || 500;
                if (err.statusCode === 500) {
                    err.message = 'Ha ocurrido un error al validar la información proporcionada por el usuario';
                }
                return next(err);
            }
        }

        // Devolver un error HTTP 400 con el mensaje de error de validación del cuerpo de la solicitud
        const statusCode = 400;
        return res.status(statusCode).json({ statusCode, message: error.details[0].message, data: error });
    }
    next();
};

module.exports = { validateSchema };
