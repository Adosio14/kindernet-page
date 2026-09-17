// Definiciones globales
export const server_url = "http://localhost:5000"
export const max_categories = 5
export const use_timer = true
export const base_timer = 1000
export const category_colors = ["steelblue", "crimson", "forestgreen", "goldenrod", "purple"]
// network 
export const width = 500
export const xcenter = width / 2
export const height = 650
export const layer_sep = 200
export const unit_sep = [90, 90, 110]
export const xpos = [-1, 0, 1].map((x, k) => x * layer_sep + xcenter)
export const im_height = 100
// entrenamiento
export const batch_size = 8             // lote de tamaño fijo, igual al original (evita recompilar shaders al cambiar la cantidad de fotos)
export const train_epochs = 10
export const train_debounce = 1500      // ms sin fotos nuevas antes de entrenar
export const use_shape_uniforms = false // WEBGL_USE_SHAPES_UNIFORMS (opcional; con lotes fijos casi no hace falta)
export const feature_chunk = 4          // fotos por tanda al calcular rasgos de MobileNet
// tensores globales con las imágenes, los rasgos de MobileNet y las etiquetas de cada conjunto
export const data_tensors = ['train_tensors', 'train_features', 'train_labels', 'test_tensors', 'test_features', 'test_labels']
