variable "docker_host" {
  description = "Endpoint del Docker Engine local."
  type        = string
}

variable "image_name" {
  description = "Etiqueta de la imagen construida localmente."
  type        = string
}

variable "host_port" {
  description = "Puerto local en el que se publicará la aplicación."
  type        = number

  validation {
    condition     = var.host_port >= 1 && var.host_port <= 65535
    error_message = "host_port debe estar entre 1 y 65535."
  }
}
