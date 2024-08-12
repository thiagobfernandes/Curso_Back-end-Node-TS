import * as GetByEmail from "./GetByEmail";
import * as Create from "./Create";

export const UsuariosProvider = {
    ...GetByEmail,
    ...Create
}