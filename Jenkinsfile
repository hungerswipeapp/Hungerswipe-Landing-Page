pipeline {
  agent {
    node {
      label 'dockerbuild01'
    }

  }
  stages {
    stage('build') {
      steps {
        sh ''' 
        export DOCKER_HOST='34.71.41.214:4242'
        ls -lha 
        docker ps 
        '''
      }
    }

  }
}