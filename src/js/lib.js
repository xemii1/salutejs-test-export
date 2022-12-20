function sendCommand(response, command) {
    if (!response.replies) {
        response.replies = [];
    }
    
    response.replies.push({ 
        type: "raw", 
        body: { 
            items: [{
                command: command
            }]
        }
    })
}

function sendAction(response, action, payload) {
    sendCommand(response, { type: "smart_app_data", action: action, payload: payload });
}

function sendButtons(response, buttons) {
    if (!response.replies) {
        response.replies = [];
    }
    
    response.replies.push({
        "type":"buttons",
        "buttons": buttons
    })
}

function sendText(response, text) {
    response.replies.push({
        "type":"text",
        "text": text
    })
}

function getSelectedItemIndex(request) {
    if (!!request &&
        !!request.payload &&
        !!request.payload.selected_item) {
            
        return request.payload.selected_item.index;
    }
}

function getSelectedItem(request) {
    var index = getSelectedItemIndex(request);
    if (index === undefined) {
        return;
    }
    
    if (!!request &&
        !!request.payload &&
        !!request.payload.meta &&
        !!request.payload.meta.current_app &&
        !!request.payload.meta.current_app.state &&
        !!request.payload.meta.current_app.state.item_selector &&
        !!request.payload.meta.current_app.state.item_selector.items) {
            
        return request.payload.meta.current_app.state.item_selector.items[index];
    }
}

function getSelectedItemId(request) {
    var item = getSelectedItem(request);
    if (!item) {
        return;
    }
    return item.id;
}

function getState(request) {
    if (!!request &&
        !!request.payload &&
        !!request.payload.meta &&
        !!request.payload.meta.current_app &&
        !!request.payload.meta.current_app.state) {
            
        return request.payload.meta.current_app.state;
    }
}

function getServerAction(request) {
    if (!!request &&
        !!request.payload &&
        !!request.payload.server_action) {
            
        return request.payload.server_action;
    }
}