//META{"name":"Accord"}*//

var ENABLE_CHANNEL_MEMBERS_BAR_TOGGLE_BUTTON = true;

var MODE_SHOW_ALL = 0;
var MODE_HIDE_CHANNELS = 1;
var MODE_HIDE_ALL = 2;
var MODE_HIDE_GUILDS = 3;

var SIDEBAR_TOGGLE_BUTTON_POSITION_RIGHT_TITLE = 0;
var SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_TITLE = 1;
var SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_BUTTONS = 2;
var SIDEBAR_TOGGLE_BUTTON_POSITION_NONE = 3;

var SVG_LEFT_ARROW = "M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z";
var SVG_RIGHT_ARROW = "M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z";
var SVG_PIN = "M17.592,8.936l-6.531-6.534c-0.593-0.631-0.751-0.245-0.751,0.056l0.002,2.999L5.427,9.075H2.491c-0.839,0-0.162,0.901-0.311,0.752l3.683,3.678l-3.081,3.108c-0.17,0.171-0.17,0.449,0,0.62c0.169,0.17,0.448,0.17,0.618,0l3.098-3.093l3.675,3.685c-0.099-0.099,0.773,0.474,0.773-0.296v-2.965l3.601-4.872l2.734-0.005C17.73,9.688,18.326,9.669,17.592,8.936 M3.534,9.904h1.906l4.659,4.66v1.906L3.534,9.904z M10.522,13.717L6.287,9.48l4.325-3.124l3.088,3.124L10.522,13.717z M14.335,8.845l-3.177-3.177V3.762l5.083,5.083H14.335z";
var SVG_WINDOW = "M17.701,3.919H2.299c-0.223,0-0.405,0.183-0.405,0.405v11.349c0,0.223,0.183,0.406,0.405,0.406h15.402c0.224,0,0.405-0.184,0.405-0.406V4.325C18.106,4.102,17.925,3.919,17.701,3.919 M17.296,15.268H2.704V7.162h14.592V15.268zM17.296,6.352H2.704V4.73h14.592V6.352z M5.947,5.541c0,0.223-0.183,0.405-0.405,0.405H3.515c-0.223,0-0.405-0.182-0.405-0.405c0-0.223,0.183-0.405,0.405-0.405h2.027C5.764,5.135,5.947,5.318,5.947,5.541";
var SVG_MEMBERS = "M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415";
var SVG_MEMBERS_2 = "M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z";

var sidebarMode;
var mainWindow = null;
var guilds = null;
var channels = null;
var titleBarTitle = null;
var sidebarToggleButton = null;
var alwaysOnTopButton = null;
var channelMembersBarToggleButton = null;
var channelMembersBarHidden = false;

var Accord = function() {};

Accord.prototype.getVersion = function() {
    return "0.3";
};

Accord.prototype.defaultSettings = {
    sidebarToggleButtonPosition:                SIDEBAR_TOGGLE_BUTTON_POSITION_RIGHT_TITLE,
    channelMembersBarToggleButtonVisibility:    false,
    alwaysOnTopButtonVisibility:                true,
    windowMinimumWidth:                         220,
    windowMinimumHeight:                        100
};

Accord.prototype.start = function() {
    this.setupMainWindow();
    this.loadAlwaysOnTopButton();
    this.loadChannelMembersBarToggleButton();
    this.loadSidebarToggleButton();
};

Accord.prototype.setupMainWindow = function() {
    var settingsWindowMinimumWidth = this.getSetting("windowMinimumWidth");
    var settingsWindowMinimumHeight = this.getSetting("windowMinimumHeight");
    console.log("load settingsWindowMinimumWidth:"+ settingsWindowMinimumWidth + " settingsWindowMinimumHeight:"+ settingsWindowMinimumHeight);

    this.mainWindow = require('electron').remote.getCurrentWindow();
    this.mainWindow.setMinimumSize(parseInt(settingsWindowMinimumWidth), parseInt(settingsWindowMinimumHeight));
};

Accord.prototype.loadSidebarToggleButton = function() {
    var settingSidebarToggleButtonPosition = this.getSetting("sidebarToggleButtonPosition");
    if (settingSidebarToggleButtonPosition == SIDEBAR_TOGGLE_BUTTON_POSITION_NONE) return;
    
    sidebarMode = MODE_SHOW_ALL;

    var positionLeftTitleStyle = "position: absolute; left: 0px; top: 0px;";
    var positionRightTitleStyle = "position: absolute; left: 71px; top: 0px;";
    var positionLeftButtonsStyle = "";      
    var positionStyle = settingSidebarToggleButtonPosition == SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_TITLE ? positionLeftTitleStyle : settingSidebarToggleButtonPosition == SIDEBAR_TOGGLE_BUTTON_POSITION_RIGHT_TITLE ? positionRightTitleStyle : positionLeftButtonsStyle;

    guilds = $(".guilds-wrapper");
    channels = $("[class^='channels-']");

    sidebarToggleButton = $($.parseHTML(`
        <div class="accordSidebarToggleButton winButtonMinMax-bT_gQ1 winButton-U7zAqI center-1MLNrE flex-3B1Tl4 justifyCenter-29N31w alignCenter-3VxkQP" 
            title="Toggle sidebars" 
            style="` + positionStyle + `">
            <svg width="16" height="16" viewBox="0 0 20 20">
                <path
                    class="accordSidebarToggleButtonPath"
                    fill="#ffffff"
                    d="` + SVG_LEFT_ARROW + `">
                </path>
            </svg>
        </div>
    `));
    sidebarToggleButton.appendTo("div[class*='titleBar']");

    if (settingSidebarToggleButtonPosition == SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_TITLE) {
        titleBarTitle = $("[class^='wordmark-']");
        titleBarTitle.attr("style", "left: 28px;");
    }

    var sidebarToggleButtonPath = $(".accordSidebarToggleButtonPath");

    sidebarToggleButton.on('click', function() {
        switch (sidebarMode) {
            case MODE_SHOW_ALL:
                //channels.hide();
                channels.animate({width: "toggle"}, "fast");
                sidebarMode = MODE_HIDE_CHANNELS;
                break;
            case MODE_HIDE_CHANNELS:
                //guilds.hide();
                guilds.animate({width: "toggle"}, "fast");
                sidebarToggleButtonPath.attr("d", SVG_RIGHT_ARROW);
                sidebarMode = MODE_HIDE_ALL;
                break;
            case MODE_HIDE_ALL:
                //channels.show();
                channels.animate({width: "toggle"}, "fast");
                sidebarMode = MODE_HIDE_GUILDS;
                break;
            case MODE_HIDE_GUILDS:
                //guilds.show();
                guilds.animate({width: "toggle"}, "fast");
                sidebarToggleButtonPath.attr("d", SVG_LEFT_ARROW);
                sidebarMode = MODE_SHOW_ALL;
                break;
        }
    });
};

Accord.prototype.loadAlwaysOnTopButton = function() {
    var settingsAlwaysOnTopButtonVisibility = this.getSetting("alwaysOnTopButtonVisibility");
    if (!settingsAlwaysOnTopButtonVisibility) {
        this.mainWindow.setAlwaysOnTop(false);
        return;
    }

    var inactiveColor = "#ffffff";
    var activeColor = "#ffffff";
    var activeButtonStyle = "opacity:1.0; background-color: rgba(0, 255, 0, 0.25)";

    alwaysOnTopButton = $($.parseHTML(`
        <div class="accordAlwaysOnTopButton winButtonMinMax-bT_gQ1 winButton-U7zAqI center-1MLNrE flex-3B1Tl4 justifyCenter-29N31w alignCenter-3VxkQP" 
            title="Toggle always on top mode"
            style="` + (this.mainWindow.isAlwaysOnTop() ? activeButtonStyle : "") + `">
            <svg width="16" height="16" viewBox="0 0 20 20">
                <path
                    class="accordAlwaysOnTopButtonPath"
                    fill="` + (this.mainWindow.isAlwaysOnTop() ? activeColor : inactiveColor) + `"
                    d="` + SVG_PIN + `">
                </path>
            </svg>
        </div>
    `));
    alwaysOnTopButton.appendTo("div[class*='titleBar']");

    var alwaysOnTopButtonPath = $(".accordAlwaysOnTopButtonPath");

    var theMainWindow = this.mainWindow;
    alwaysOnTopButton.on('click', function() {
        theMainWindow.setAlwaysOnTop(!theMainWindow.isAlwaysOnTop());
        alwaysOnTopButtonPath.attr("fill", theMainWindow.isAlwaysOnTop() ? activeColor : inactiveColor);
        alwaysOnTopButton.attr("style", (theMainWindow.isAlwaysOnTop() ? activeButtonStyle : ""));
    });
};

Accord.prototype.loadChannelMembersBarToggleButton = function() {
    if (!ENABLE_CHANNEL_MEMBERS_BAR_TOGGLE_BUTTON) return;

    var settingsChannelMembersBarToggleButtonVisibility = this.getSetting("channelMembersBarToggleButtonVisibility");
    if (!settingsChannelMembersBarToggleButtonVisibility) {
        BdApi.clearCSS("accordChannelMembersBarHidden");
        return;
    }

    channelMembersBarHidden = false;

    var inactiveColor = "#ffffff";
    var activeColor = "#ffffff";
    var activeButtonStyle = "opacity:1.0; background-color: rgba(255, 0, 0, 0.25)";

    channelMembersBarToggleButton = $($.parseHTML(`
        <div class="accordChannelMembersBarToggleButton winButtonMinMax-bT_gQ1 winButton-U7zAqI center-1MLNrE flex-3B1Tl4 justifyCenter-29N31w alignCenter-3VxkQP" 
            title="Toggle channel members sidebar" 
            style="` + (channelMembersBarHidden ? activeButtonStyle : "") + `">
            <svg width="16" height="16" viewBox="0 0 20 20">
                <path
                    class="accordChannelMembersBarToggleButtonPath"
                    fill="` + (channelMembersBarHidden ? activeColor : inactiveColor) + `"
                    d="` + SVG_MEMBERS + `">
                </path>
            </svg>
        </div>
    `));
    channelMembersBarToggleButton.appendTo("div[class*='titleBar']");

    var channelMembersBarToggleButtonPath = $(".accordChannelMembersBarToggleButtonPath");

    channelMembersBarToggleButton.on('click', function() {
        channelMembersBarHidden = !channelMembersBarHidden;
        if (channelMembersBarHidden) {
            BdApi.injectCSS("accordChannelMembersBarHidden", `
                .channel-members-wrap {
                    display: none;
                }
            `);
        } else {
            BdApi.clearCSS("accordChannelMembersBarHidden");
        }
        channelMembersBarToggleButtonPath.attr("fill", channelMembersBarHidden ? activeColor : inactiveColor);
        channelMembersBarToggleButton.attr("style", (channelMembersBarHidden ? activeButtonStyle : ""));
    });
};

Accord.prototype.stop = function(reload=false) {
    this.unloadAlwaysOnTopButton();
    this.unloadChannelMembersBarToggleButton();
    this.unloadSidebarToggleButton();
    if (!reload) {
        this.mainWindow.setAlwaysOnTop(false);
    }
    this.mainWindow = null;
};

Accord.prototype.unloadSidebarToggleButton = function() {
    if (sidebarToggleButton) sidebarToggleButton.remove();
    if (titleBarTitle) titleBarTitle.removeAttr("style");

    if (guilds) guilds.show();
    if (channels) channels.show();

    guilds = null;
    channels = null;
    sidebarToggleButton = null;
    titleBarTitle = null;
    sidebarMode = MODE_SHOW_ALL;
};

Accord.prototype.unloadAlwaysOnTopButton = function() {
    if (alwaysOnTopButton) alwaysOnTopButton.remove();
    alwaysOnTopButton = null;
};

Accord.prototype.unloadChannelMembersBarToggleButton = function() {
    if (!ENABLE_CHANNEL_MEMBERS_BAR_TOGGLE_BUTTON) return;

    if (channelMembersBarToggleButton) channelMembersBarToggleButton.remove();
    channelMembersBarToggleButton = null;
    channelMembersBarHidden = false;
    BdApi.clearCSS("accordChannelMembersBarHidden");
};

Accord.prototype.reloadSidebarToggleButton = function() {
    this.unloadSidebarToggleButton();
    this.loadSidebarToggleButton();
};

Accord.prototype.reloadAlwaysOnTopButton = function() {
    this.unloadAlwaysOnTopButton();
    this.loadAlwaysOnTopButton();
};

Accord.prototype.reloadChannelMembersBarToggleButton = function() {
    this.unloadChannelMembersBarToggleButton();
    this.loadChannelMembersBarToggleButton();
};

Accord.prototype.reload = function() {
    this.stop(true);
    this.start();
};

Accord.prototype.getSettingsPanel = function() {
    return `
        <div style="color: #b0b6b9;">
            <span class="bda-name">` + this.getName() + ` v` + this.getVersion() + ` by ` + this.getAuthor() + ` - Settings</span>
            <div class="bda-description" style="width:100%; max-height:initial; overflow-y:initial;">
                ` + this.getSettingsSidemenuToggleButton() + `
                <br>
                ` + (ENABLE_CHANNEL_MEMBERS_BAR_TOGGLE_BUTTON ? this.getSettingsChannelMembersBarToggleButton() + "<br>" : "")
                  + this.getSettingsAlwaysOnTopButton() + `
                <br>
                ` + this.getSettingsWindow() + `
            </div>
        </div>
        `;
};

Accord.prototype.getSettingsSidemenuToggleButton = function() {
    var settingSidebarToggleButtonPosition = this.getSetting("sidebarToggleButtonPosition");

    return `
        <svg width="16" height="16" viewBox="0 0 20 20" style="overflow: visible;">
            <path
                class="accordSidebarToggleButtonPath"
                fill="#ffffff"
                transform="translate(0, 2)"
                d="` + SVG_LEFT_ARROW + `">
            </path>
        </svg> <b>Toggle sidebar</b><br>
        <div style="padding-left: 20px; margin-top: 0px;">
            <i>Press this button in the titlebar to toggle the visibility of the left sidebars for extra space.</i><br>
            <div style="padding-left: 20px; margin-top: 0px;">
                Button position:<br>
                <input type="radio" name="sidebarToggleButtonPosition" style="cursor: pointer;"
                    id="` + SIDEBAR_TOGGLE_BUTTON_POSITION_RIGHT_TITLE + `"
                    value="` + SIDEBAR_TOGGLE_BUTTON_POSITION_RIGHT_TITLE + `"
                    ` + (settingSidebarToggleButtonPosition == SIDEBAR_TOGGLE_BUTTON_POSITION_RIGHT_TITLE ? " checked" : "") + 
                    ` onchange="BdApi.getPlugin('`+this.getName()+`').setSetting('sidebarToggleButtonPosition', `+SIDEBAR_TOGGLE_BUTTON_POSITION_RIGHT_TITLE+`, true)">
                    <label for="`+SIDEBAR_TOGGLE_BUTTON_POSITION_RIGHT_TITLE+`" style="cursor: pointer;"> After "DISCORD" title</label><br>
                <input type="radio" name="sidebarToggleButtonPosition" style="cursor: pointer;"
                    id="` + SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_TITLE + `"
                    value="` + SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_TITLE + `"
                    ` + (settingSidebarToggleButtonPosition == SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_TITLE ? " checked" : "") + 
                    ` onchange="BdApi.getPlugin('`+this.getName()+`').setSetting('sidebarToggleButtonPosition', `+SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_TITLE+`, true)">
                    <label for="`+SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_TITLE+`" style="cursor: pointer;"> Before "DISCORD" title</label><br>
                <input type="radio" name="sidebarToggleButtonPosition" style="cursor: pointer;"
                    id="` + SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_BUTTONS + `"
                    value="` + SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_BUTTONS + `"
                    ` + (settingSidebarToggleButtonPosition == SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_BUTTONS ? " checked" : "") + 
                    ` onchange="BdApi.getPlugin('`+this.getName()+`').setSetting('sidebarToggleButtonPosition', `+SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_BUTTONS+`, true)">
                    <label for="`+SIDEBAR_TOGGLE_BUTTON_POSITION_LEFT_BUTTONS+`" style="cursor: pointer;"> Before minimize, maximize and close buttons</label><br>
                <input type="radio" name="sidebarToggleButtonPosition" style="cursor: pointer;"
                    id="` + SIDEBAR_TOGGLE_BUTTON_POSITION_NONE + `"
                    value="` + SIDEBAR_TOGGLE_BUTTON_POSITION_NONE + `"
                    ` + (settingSidebarToggleButtonPosition == SIDEBAR_TOGGLE_BUTTON_POSITION_NONE ? " checked" : "") + 
                    ` onchange="BdApi.getPlugin('`+this.getName()+`').setSetting('sidebarToggleButtonPosition', `+SIDEBAR_TOGGLE_BUTTON_POSITION_NONE+`, true)">
                    <label for="`+SIDEBAR_TOGGLE_BUTTON_POSITION_NONE+`" style="cursor: pointer;"> None (hidden)</label>
            </div>
        </div>`;
};

Accord.prototype.getSettingsChannelMembersBarToggleButton = function() {
    var settingsChannelMembersBarToggleButtonVisibility = this.getSetting("channelMembersBarToggleButtonVisibility");
    
    return `
        <svg width="16" height="16" viewBox="0 0 20 20" style="overflow: visible;">
            <path
                class="accordChannelMembersBarToggleButtonPath"
                fill="#ffffff"
                transform="translate(0, 2)"
                d="` + SVG_MEMBERS + `">
            </path>
        </svg> <b>Toggle channel members bar</b><br>
        <div style="padding-left: 20px; margin-top: 0px;">
            <i>Press this button in the titlebar to toggle the visibility of the right channel members sidebar for extra space.</i><br>
            <div style="padding-left: 20px; margin-top: 0px;">
                <label for="channelMembersBarToggleButtonVisibility" style="cursor: pointer;">Button visibility: </label>
                <input type="checkbox" style="cursor: pointer;"
                    id="channelMembersBarToggleButtonVisibility" 
                    ` + (settingsChannelMembersBarToggleButtonVisibility ? " checked" : "") + 
                    ` onclick="BdApi.getPlugin('`+this.getName()+`').setSetting('channelMembersBarToggleButtonVisibility', this.checked, true);">
            </div>
        </div>
        `;
};

Accord.prototype.getSettingsAlwaysOnTopButton = function() {
    var settingsAlwaysOnTopButtonVisibility = this.getSetting("alwaysOnTopButtonVisibility");
    
    return `
        <svg width="16" height="16" viewBox="0 0 20 20" style="overflow: visible;">
            <path
                class="accordAlwaysOnTopButtonPath"
                fill="#ffffff"
                transform="translate(0, 2)"
                d="` + SVG_PIN + `">
            </path>
        </svg> <b>Always on top</b><br>
        <div style="padding-left: 20px; margin-top: 0px;">
            <i>Press this button in the titlebar to toggle pinning of the window to the front of the screen, which will be always on top.</i><br>
            <div style="padding-left: 20px; margin-top: 0px;">
                <label for="alwaysOnTopButtonVisibility" style="cursor: pointer;">Button visibility: </label>
                <input type="checkbox" style="cursor: pointer;"
                    id="alwaysOnTopButtonVisibility" 
                    ` + (settingsAlwaysOnTopButtonVisibility ? " checked" : "") + 
                    ` onclick="BdApi.getPlugin('`+this.getName()+`').setSetting('alwaysOnTopButtonVisibility', this.checked, true);">
            </div>
        </div>
        `;
};

Accord.prototype.getSettingsWindow = function() {
    var settingsWindowMinimumWidth = this.getSetting("windowMinimumWidth");
    var settingsWindowMinimumHeight = this.getSetting("windowMinimumHeight");
    
    return `
        <svg width="16" height="16" viewBox="0 0 20 20" style="overflow: visible;">
            <path
                class="accordSidebarToggleButtonPath"
                fill="#ffffff"
                transform="translate(0, 2)"
                d="` + SVG_WINDOW + `">
            </path>
        </svg> <b>Window</b><br>
        <div style="padding-left: 20px; margin-top: 0px;">
            <i>Adjust the behavior of the discord window.</i><br>
            <div style="padding-left: 20px; margin-top: 0px;">
                Minimum width: <input id='windowMinimumWidth'  type='number' value="`+settingsWindowMinimumWidth+`" maxlength="4" size="4" style="width:55px; margin-left:4px;"
                                    onchange="BdApi.getPlugin('`+this.getName()+`').setSetting('windowMinimumWidth', parseInt(this.value), true);"> pixels<br>
                Minimum height: <input id='windowMinimumHeight'  type='number' value="`+settingsWindowMinimumHeight+`" maxlength="4" size="4" style="width:55px;"
                                    onchange="BdApi.getPlugin('`+this.getName()+`').setSetting('windowMinimumHeight', parseInt(this.value), true);"> pixels
            </div>
        </div>
        `;
};

Accord.prototype.getSetting = function(key) {
    var value = bdPluginStorage.get(this.getName().toLowerCase(), key);
    var returnV = value ? JSON.parse(value) : this.defaultSettings[key];
    return returnV;
};

Accord.prototype.setSetting = function(key, value, reload=false) {
    bdPluginStorage.set(this.getName().toLowerCase(), key, JSON.stringify(value));
    if (reload) this.reload();
};

/*
Accord.prototype.loadSettings = function() {
    var config = bdPluginStorage.get(this.getName().toLowerCase(), 'config');
    alert(config);
    var settings = config ? JSON.parse(config) : {version:"0"};
    alert(settings);
    if(settings.version != this.defaultSettings.version) {
        console.log('['+this.getName()+'] Settings were outdated/invalid/nonexistent. Using default settings.');
        settings = this.defaultSettings();
        bdPluginStorage.set(this.getName().toLowerCase(), 'config', JSON.stringify(settings));
    }
    return settings;
};

Accord.prototype.saveSettings = function() {
    var settings = this.loadSettings();
    //settings.sidebarToggleButtonPosition = 

    bdPluginStorage.set(this.getName().toLowerCase(), 'config', JSON.stringify(settings));

    this.reload();

    if (!this.jsonEquals(settings, this.defaultSettings)) {
        alert('settings changed');
        var accordResetSettingsButton = $(".accordResetSettingsButton");
        if (accordResetSettingsButton) accordResetSettingsButton.prop("disabled", false);
    }
};


Accord.prototype.resetSettings = function () {
    var settings = this.defaultSettings;
    bdPluginStorage.set(this.getName().toLowerCase(), 'config', JSON.stringify(settings));
    this.reload();

    var accordResetSettingsButton = $(".accordResetSettingsButton");
    if (accordResetSettingsButton) accordResetSettingsButton.prop("disabled", true);
};
*/

Accord.prototype.getName = function() {
    return "Accord";
};

Accord.prototype.getDescription = function() {
    return `
        Accord plugin brings harmony to Discord by seamlessly integrating necessary and helpful features. 
        Toggle sidebars, toggle window "always on top" mode, and resize window smaller. 
        Click "Settings" button for more details and options.
        `;
};

Accord.prototype.getAuthor = function() {
    return "Shilo White";
};

Accord.prototype.jsonEquals = function(json1, json2) {
    return JSON.stringify(json1) === JSON.stringify(json2);
};

//unused methods
Accord.prototype.load = function() {};
Accord.prototype.unload = function() {};
Accord.prototype.onMessage = function() {};
Accord.prototype.onSwitch = function() {};
Accord.prototype.observer = function(e) {};