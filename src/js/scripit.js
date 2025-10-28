// Adicionando interatividade simples
document.addEventListener('DOMContentLoaded', function() {
    // TODO O SEU JAVASCRIPT AQUI
    
    // Função para mostrar/ocultar respostas individuais
    function toggleAnswer(answerId) {
        const answer = document.getElementById(answerId);
        answer.classList.toggle('show');
    }
    
    // Função para mostrar/ocultar todas as respostas
    function toggleAllAnswers() {
        const answers = document.querySelectorAll('.quiz-answer');
        const allHidden = Array.from(answers).every(answer => !answer.classList.contains('show'));
        
        answers.forEach(answer => {
            if (allHidden) {
                answer.classList.add('show');
            } else {
                answer.classList.remove('show');
            }
        });
    }
    
    // Torna as funções globais para o HTML poder chamar
    window.toggleAnswer = toggleAnswer;
    window.toggleAllAnswers = toggleAllAnswers;
});