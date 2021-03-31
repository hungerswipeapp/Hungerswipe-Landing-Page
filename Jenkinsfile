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
        sed -i "s,{version},$BUILD_NUMBER,g" docker-swarm.yml
        
        cat docker-swarm.yml
        docker stack deploy --with-registry-auth --compose-file docker-swarm.yml landing

        '''
      }
    }

  }
}