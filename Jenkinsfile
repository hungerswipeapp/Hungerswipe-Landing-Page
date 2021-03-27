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
        
        mv ./hungerswipe/* . 
        ls -lha 
        docker build -t landing:$BUILD_NUMBER .

        '''
      }
    }

  }
}