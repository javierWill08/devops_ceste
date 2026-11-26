# Contenedor local con Terraform

Esta configuración aplica la estrategia de entrega definida para la aplicación:
construye una imagen Docker desde el `Dockerfile` del proyecto y ejecuta el
servidor Node.js en un contenedor local. No crea recursos en la nube.

La configuración se separa por responsabilidad:

- `versions.tf`: versión mínima de Terraform y origen/rango de versión del
  proveedor Docker requerido.
- `provider.tf`: endpoint del Docker Engine, obtenido desde `docker_host`.
- `main.tf`: imagen y contenedor local.
- `variables.tf`: declaración y validación de parámetros.
- `terraform.tfvars`: valores para el entorno local, como el puerto publicado.
- `outputs.tf`: valores útiles que Terraform muestra al aplicar.

## Requisitos

- Docker Desktop instalado y en ejecución.
- Terraform 1.5 o posterior.

## Crear y ejecutar

Desde esta carpeta (`devops_ceste/infra`), inicializa Terraform y revisa el plan:

```powershell
terraform init
terraform fmt -check
terraform validate
terraform plan
```

Aplica la configuración para construir la imagen y crear el contenedor:

```powershell
terraform apply
```

Terraform carga automáticamente `terraform.tfvars`. Ese archivo indica la
pipe local de Docker Desktop, la etiqueta `calculadora:latest` y el puerto
publicado. La imagen se construye desde el Dockerfile del proyecto; no se
descarga desde Docker Hub. Con `host_port = 3000`, la aplicación queda
disponible en `http://127.0.0.1:3000`. Puedes cambiar ese valor en
`terraform.tfvars` o sobrescribirlo al aplicar:

```powershell
terraform apply -var="host_port=8080"
```

El puerto interno del contenedor permanece en `3000`; solo cambia el puerto
publicado en el equipo local. El contenedor escucha únicamente en `127.0.0.1`.

## Comprobar la aplicación

La API devuelve JSON. Por ejemplo:

```powershell
Invoke-RestMethod -Uri "http://127.0.0.1:3000/sumar?a=2&b=3"
```

La respuesta debe incluir `resultado: 5`. Sustituye `3000` por el puerto elegido
si configuraste `host_port`.

## Eliminar los recursos locales

```powershell
terraform destroy
```

El estado de Terraform y los archivos descargados por el proveedor se mantienen
localmente en esta carpeta y están excluidos del control de versiones.