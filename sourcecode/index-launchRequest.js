handle(handlerInput) {
        
    var userID = handlerInput.requestEnvelope['session']['user']['userId'];
    var autorisationsDaten = require('./autorisation.json');
    var juconid = getJuconnIDbyAlexaID(userID, autorisationsDaten);
        
    if(juconid == 0) {
            
        // Tell User how to authorize, and exit Skill
        ...
    }else{
           
        // Welcome User, start Interaction according to state-machine
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const speakOutput = requestAttributes.t('WELCOME_MESSAGE', 
                            requestAttributes.t('SKILL_NAME'));
        const repromptOutput = requestAttributes.t('WELCOME_REPROMPT');
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
}

