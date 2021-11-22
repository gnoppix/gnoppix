// SPDX-License-Identifier: GPL-3.0-only OR LicenseRef-KDE-Accepted-GPL
// SPDX-FileCopyrightText: 2018-2021 Harald Sitter <sitter@kde.org>

var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "showToolbox": "false"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

// Add a panel for now. Calamares has no means to configure networking
// so we provide a bit of a stop-gap measure by having a panel with the
// bare minimum to do network management. Sucks a bit but oh well.
var panel = new Panel
panel.location = 'bottom'
var taskmanager = panel.addWidget('org.kde.plasma.taskmanager')
// Fuck off with them launchers. They litterally break the way OEM is meant to work (= no extra apps!)
taskmanager.writeConfig("launchers", "")
taskmanager.reloadConfig()
panel.addWidget('org.kde.plasma.networkmanagement')
