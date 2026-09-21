pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm ci'
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building React frontend...'
                sh 'npm run build'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                echo 'Deploying frontend to Nginx...'

                sh '''
                    rm -rf /var/www/frontend/*
                    cp -r dist/* /var/www/frontend/
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                echo 'Verifying deployed files...'

                sh '''
                    ls -la /var/www/frontend
                    test -f /var/www/frontend/index.html
                '''
            }
        }
    }

    post {

        success {
            echo 'Frontend deployment completed successfully!'
        }

        failure {
            echo 'Frontend deployment failed!'
        }
    }
}
