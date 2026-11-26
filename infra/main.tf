resource "docker_image" "app" {
  name = var.image_name

  build {
    context = "${path.module}/.."
  }
}

resource "docker_container" "app" {
  name  = "devops-ceste-local"
  image = docker_image.app.image_id

  ports {
    internal = 3000
    external = var.host_port
    ip       = "127.0.0.1"
  }
}
