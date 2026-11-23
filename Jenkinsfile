pipeline {
    agent any

    tools {
        nodejs 'Node'
    }

    parameters {
        booleanParam(
            name: 'PUBLICAR_IMAGEN',
            defaultValue: true,
            description: 'Indica si la imagen debe publicarse en Docker Hub'
        )
    }

    environment {
        DOCKER_IMAGE = 'xaviwill2020/calculadora'
        DOCKER_CREDENTIALS = 'de265502-f2e7-41c6-b0fc-e903446a6282'
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                checkout scm
            }
        }

        stage('Pruebas') {
            steps {
                sh 'npm ci'
                sh 'npm test -- --runInBand'
            }
        }

        stage('Construir imagen') {
            steps {
                sh 'docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} .'
                sh 'docker tag ${DOCKER_IMAGE}:${BUILD_NUMBER} ${DOCKER_IMAGE}:latest'
            }
        }

        stage('Publicar imagen') {
            when {
                expression { return params.PUBLICAR_IMAGEN }
            }

            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: "${DOCKER_CREDENTIALS}",
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh 'echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin'
                    sh 'docker push ${DOCKER_IMAGE}:${BUILD_NUMBER}'
                    sh 'docker push ${DOCKER_IMAGE}:latest'
                }
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
