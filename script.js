// Define a simple context for conversation
let conversationContext = '';

// Toggle function to show or hide the chatbot
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotIcon = document.getElementById('chatbot-icon');
    
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'flex';
        chatbotIcon.style.display = 'none'; // Hide the icon when the chatbot is expanded
    } else {
        chatbotContainer.style.display = 'none';
        chatbotIcon.style.display = 'flex'; // Show the icon again when minimized
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    
    if (userInput.trim() !== "") {
        // Add user's message to chat
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.innerHTML = `<span class="message-content">${userInput}</span>`;
        document.getElementById('chat-box').appendChild(userMessage);
        
        // Clear the input field
        document.getElementById('user-input').value = "";

        // Simulate bot's response based on context
        setTimeout(() => {
            handleConversation(userInput);
        }, 1000);

        // Scroll to the bottom of the chat
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    }
}

function handleConversation(userMessage) {
    // Lowercase user message to handle various cases
    userMessage = userMessage.toLowerCase();

    // Check if the user wants help
    if (userMessage.includes("help")) {
        conversationContext = 'help';
        sendBotResponse("I'm here to help you. What's on your mind?");
    } 
    // Check if the user says "talk"
    else if (conversationContext === 'help' && userMessage.includes("talk")) {
        conversationContext = 'talk';
        sendBotResponse("I'm glad you're ready to talk. What would you like to talk about?");
    } 
    // Check if the user is feeling stressed
    else if (userMessage.includes("stressed") || userMessage.includes("stress")) {
        conversationContext = 'stress';
        sendBotResponse("It sounds like you're feeling stressed. Would you like to talk about what’s causing it?");
    } 
    // Check if the user is feeling anxious
    else if (userMessage.includes("anxious") || userMessage.includes("anxiety")) {
        conversationContext = 'anxiety';
        sendBotResponse("Anxiety can be overwhelming. How are you feeling right now?");
    } 
    // If the user says they are sad
    else if (userMessage.includes("sad") || userMessage.includes("depressed")) {
        conversationContext = 'sad';
        sendBotResponse("I'm really sorry you're feeling this way. Do you want to share what's going on?");
    } 
    // If the user wants to take a break
    else if (userMessage.includes("break") || userMessage.includes("rest")) {
        conversationContext = 'break';
        sendBotResponse("Taking breaks is important. It's okay to rest. Would you like tips for relaxation?");
    } 
    // If the user is asking for advice
    else if (userMessage.includes("advice") || userMessage.includes("suggestion")) {
        conversationContext = 'advice';
        sendBotResponse("Here’s a little advice: Sometimes it's helpful to step back and breathe deeply. Would you like more tips?");
    } 
    // If the user needs comfort
    else if (userMessage.includes("comfort") || userMessage.includes("help me feel better")) {
        conversationContext = 'comfort';
        sendBotResponse("I'm here for you. You're not alone in this. Would you like to talk more about it?");
    } 
    // If the user feels overwhelmed
    else if (userMessage.includes("overwhelmed")) {
        conversationContext = 'overwhelmed';
        sendBotResponse("Feeling overwhelmed is tough. Would you like to talk about what’s making you feel this way?");
    }
    // If the user just wants to talk or says something open-ended
    else if (conversationContext === 'talk' || conversationContext === '') {
        conversationContext = 'talk';
        sendBotResponse("Thank you for sharing. I'm listening. How are you feeling?");
    } 
    // Default response for other cases
    else {
        sendBotResponse("I'm here for you. Please feel free to share your thoughts.");
    }
}

function sendBotResponse(response) {
    // Add bot's message to chat
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');
    botMessage.innerHTML = `<span class="message-content">${response}</span>`;
    document.getElementById('chat-box').appendChild(botMessage);
}
const chatbotDataset = [
    // Greetings
    {
        input: ["hi", "hello", "hey"],
        response: [
            "Hello! How can I assist you today?",
            "Hi there! What’s on your mind?",
            "Hey! I'm here to help. How can I support you?"
        ]
    },
    {
        input: ["how are you?", "how’s it going?", "what’s up?"],
        response: [
            "I'm here and ready to listen. How are you feeling?",
            "I'm just a chatbot, but I'm here for you. What's going on?",
            "All good on my end! How can I assist you today?"
        ]
    },

    // Seeking help
    {
        input: ["I need help", "Can you help me?", "I feel lost"],
        response: [
            "I'm here for you. Can you share more about what's troubling you?",
            "Of course. What's on your mind?",
            "Absolutely. Let’s work through it together."
        ]
    },

    // Anxiety and stress
    {
        input: ["I feel anxious", "I'm nervous", "I have anxiety"],
        response: [
            "It's okay to feel this way. Do you want to try a breathing exercise?",
            "You're not alone. Would talking about it help?",
            "Take a moment to breathe. I'm here whenever you're ready."
        ]
    },
    {
        input: ["Yes", "Sure", "Okay"],
        response: [
            "Great! Inhale deeply... now exhale slowly. How do you feel now?",
            "Let's start by focusing on your breath. Feel any change?",
            "Good. Take a deep breath in... and out. Feeling any better?"
        ]
    },

    // Sadness and low mood
    {
        input: ["I feel sad", "I'm depressed", "Feeling down"],
        response: [
            "I'm sorry to hear that. Do you want to talk about what's making you feel this way?",
            "It's tough feeling this way. Would sharing more help?",
            "Thank you for sharing. Would you like some tips to feel better?"
        ]
    },
    {
        input: ["Not sure", "I don’t know", "It’s complicated"],
        response: [
            "That’s okay. Sometimes just talking helps. I’m here for you.",
            "It’s okay not to have all the answers. Take your time.",
            "We can figure it out together. Start where you feel comfortable."
        ]
    },

    // Seeking advice
    {
        input: ["What should I do?", "Any advice?", "How can I feel better?"],
        response: [
            "Small steps matter. Have you tried journaling or talking to someone?",
            "Self-care is important. Even a short walk can help. What do you think?",
            "Sometimes, changing your routine helps. Would you like to hear more tips?"
        ]
    },

    // Affirmations and support
    {
        input: ["I’m tired", "It’s too much", "I’m overwhelmed"],
        response: [
            "It sounds like you’ve been through a lot. Rest is important too.",
            "Take a break if you need to. You deserve it.",
            "It’s okay to pause and breathe. Let’s tackle things step by step."
        ]
    },
    {
        input: ["Thank you", "Thanks", "I appreciate it"],
        response: [
            "You're welcome. I'm glad I could help.",
            "Happy to assist. Take care of yourself.",
            "Anytime. Remember, you're not alone."
        ]
    }
];
function getChatbotResponse(userMessage) {
    const messageLower = userMessage.toLowerCase();

    for (let entry of chatbotDataset) {
        for (let phrase of entry.input) {
            if (messageLower.includes(phrase.toLowerCase())) {
                const responses = entry.response;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }
    return "I'm here to listen. Could you tell me more?";
}

// Example usage in chatbot interface
document.getElementById("send-button").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addMessage("User", userInput);
        const botResponse = getChatbotResponse(userInput);
        addMessage("Bot", botResponse);
        document.getElementById("user-input").value = "";
    }
});
let conversationHistory = [];

function getChatbotResponse(userMessage) {
    const messageLower = userMessage.toLowerCase();
    
    // Prioritize contextual responses based on history
    if (conversationHistory.length > 0) {
        const lastInteraction = conversationHistory[conversationHistory.length - 1];
        
        // Example: Offer further help if user previously mentioned anxiety
        if (lastInteraction.user.includes("anxious") && messageLower.includes("still anxious")) {
            return "Thanks for sharing. Would you like to try another calming technique?";
        }
    }

    // Match standard responses if no specific context applies
    for (let entry of chatbotDataset) {
        for (let phrase of entry.input) {
            if (messageLower.includes(phrase.toLowerCase())) {
                const responses = entry.response;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }
    return "I'm here to listen. Could you tell me more?";
}
function getChatbotResponse(userMessage) {
    const messageLower = userMessage.toLowerCase().trim();

    // Specific response for "hii"
    if (messageLower === "hii") {
        return "Hello, how have you been?";
    }

    // Check other datasets
    for (let entry of chatbotDataset) {
        for (let phrase of entry.input) {
            if (messageLower.includes(phrase.toLowerCase())) {
                const responses = entry.response;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }

    // Default fallback
    return "I'm here to listen. Could you tell me more?";
}


