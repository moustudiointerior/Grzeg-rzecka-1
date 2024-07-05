var APP_DATA = {
  "scenes": [
    {
      "id": "0-korytarz-1",
      "name": "korytarz 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2224384844076237,
          "pitch": 0.048825918620217124,
          "rotation": 0,
          "target": "1-azienka-1"
        },
        {
          "yaw": 0.31275784894167913,
          "pitch": -0.031026441775450664,
          "rotation": 0,
          "target": "6-toaleta-1"
        },
        {
          "yaw": 0.44356736655460693,
          "pitch": 0.020435723430679786,
          "rotation": 0,
          "target": "2-salon-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-azienka-1",
      "name": "azienka 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7490811963083424,
          "pitch": 0.02995414806923513,
          "rotation": 0,
          "target": "0-korytarz-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon-1",
      "name": "salon 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3470408556296736,
          "pitch": 0.046662485930164976,
          "rotation": 0,
          "target": "4-salon-biurko"
        },
        {
          "yaw": 0.7434627650648498,
          "pitch": -0.002208554135464169,
          "rotation": 0,
          "target": "5-st"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salon-2",
      "name": "salon 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5752191516560377,
          "pitch": 0.03274294638619679,
          "rotation": 0,
          "target": "4-salon-biurko"
        },
        {
          "yaw": 2.0921313385162,
          "pitch": 0.019603124105412206,
          "rotation": 0,
          "target": "0-korytarz-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salon-biurko",
      "name": "salon biurko",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6765354002876904,
          "pitch": 0.08006481040648339,
          "rotation": 0,
          "target": "5-st"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-st",
      "name": "stół",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0895557170422023,
          "pitch": 0.08452416949121933,
          "rotation": 0,
          "target": "3-salon-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-toaleta-1",
      "name": "toaleta 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3033006315611573,
          "pitch": 0.022635127819148337,
          "rotation": 0,
          "target": "0-korytarz-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
