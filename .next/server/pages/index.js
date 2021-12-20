(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./components/Home/MessageNotificationModal.js":
/*!*****************************************************!*\
  !*** ./components/Home/MessageNotificationModal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Home\\MessageNotificationModal.js";





function MessageNotificationModal({
  socket,
  showNewMessageModal,
  newMessageModal,
  newMessageReceived,
  user
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onModalClose = () => showNewMessageModal(false);

  const formSubmit = e => {
    e.preventDefault();

    if (socket.current) {
      socket.current.emit("sendMsgFromNotification", {
        userId: user._id,
        msgSendToUserId: newMessageReceived.sender,
        msg: text
      });
      socket.current.on("msgSentFromNotification", () => {
        showNewMessageModal(false);
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      size: "small",
      open: newMessageModal,
      onClose: onModalClose,
      closeIcon: true,
      closeOnDimmerClick: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
        content: `New Message from ${newMessageReceived.senderName}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "bubbleWrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inlineContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              className: "inlineIcon",
              src: newMessageReceived.senderProfilePic
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "otherBubble other",
            children: newMessageReceived.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "other",
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(newMessageReceived.date)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            position: "sticky",
            bottom: "0px"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
            secondary: true,
            color: "teal",
            attached: "bottom",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
              reply: true,
              onSubmit: formSubmit,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
                size: "large",
                placeholder: "Send New Message",
                value: text,
                onChange: e => setText(e.target.value),
                action: {
                  color: "blue",
                  icon: "telegram plane",
                  disabled: text === "",
                  loading: loading
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            marginTop: "5px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: `/messages?message=${newMessageReceived.sender}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "View All Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Instructions, {
            username: user.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

const Instructions = ({
  username
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "help"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
        children: "If you do not like this popup to appear when you receive a new message:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "hand point right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
      children: ["You can disable it by going to", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: `/${username}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: " Account "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined), "Page and clicking on Settings Tab."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "hand point right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, undefined), "Inside the menu,there is an setting named: Show New Message Popup?"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "hand point right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined), "Just toggle the setting to disable/enable the Message Popup to appear."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 91,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (MessageNotificationModal);

/***/ }),

/***/ "./components/Home/NotificationPortal.js":
/*!***********************************************!*\
  !*** ./components/Home/NotificationPortal.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Home\\NotificationPortal.js";





function NotificationPortal({
  newNotification,
  notificationPopup,
  showNotificationPopup
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    name,
    profilePicUrl,
    username,
    postId
  } = newNotification;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TransitionablePortal, {
    transition: {
      animation: "fade left",
      duration: "500"
    },
    onClose: () => notificationPopup && showNotificationPopup(false),
    onOpen: _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_2__.default,
    open: notificationPopup,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
      style: {
        right: "5%",
        position: "fixed",
        top: "10%",
        zIndex: 1000
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: "close",
        size: "large",
        style: {
          float: "right",
          cursor: "pointer"
        },
        onClick: () => showNotificationPopup(false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Event, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Label, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Content, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Summary, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.User, {
                onClick: () => router.push(`/${username}`),
                children: [name, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, this), " ", "liked your ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                onClick: () => router.push(`/post/${postId}`),
                children: " post"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 28
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Feed.Date, {
                children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(Date.now())
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NotificationPortal);

/***/ }),

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoProfilePosts": function() { return /* binding */ NoProfilePosts; },
/* harmony export */   "NoFollowData": function() { return /* binding */ NoFollowData; },
/* harmony export */   "NoMessages": function() { return /* binding */ NoMessages; },
/* harmony export */   "NoPosts": function() { return /* binding */ NoPosts; },
/* harmony export */   "NoProfile": function() { return /* binding */ NoProfile; },
/* harmony export */   "NoNotifications": function() { return /* binding */ NoNotifications; },
/* harmony export */   "NoPostFound": function() { return /* binding */ NoPostFound; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Layout\\NoData.js";

const NoProfilePosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    info: true,
    icon: "meh",
    header: "Sorry",
    content: "User has not posted anything yet!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "long arrow alternate left",
    content: "Go Back",
    as: "a",
    href: "/"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)]
}, void 0, true);
const NoFollowData = ({
  followersComponent,
  followingComponent
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [followersComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "user outline",
    info: true,
    content: `User does not have followers`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }, undefined), followingComponent && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "user outline",
    info: true,
    content: `User does not follow any users`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }, undefined)]
}, void 0, true);
const NoMessages = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "telegram plane",
  header: "Sorry",
  content: "You have not messaged anyone yet.Search above to message someone!"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 23,
  columnNumber: 3
}, undefined);
const NoPosts = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 32,
  columnNumber: 3
}, undefined);
const NoProfile = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Profile Found."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 41,
  columnNumber: 3
}, undefined);
const NoNotifications = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  content: "No Notifications",
  icon: "smile",
  info: true
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 45,
  columnNumber: 3
}, undefined);
const NoPostFound = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Post Found."
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 49,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/Layout/PlaceHolderGroup.js":
/*!***********************************************!*\
  !*** ./components/Layout/PlaceHolderGroup.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceHolderPosts": function() { return /* binding */ PlaceHolderPosts; },
/* harmony export */   "PlaceHolderSuggestions": function() { return /* binding */ PlaceHolderSuggestions; },
/* harmony export */   "PlaceHolderNotifications": function() { return /* binding */ PlaceHolderNotifications; },
/* harmony export */   "EndMessage": function() { return /* binding */ EndMessage; },
/* harmony export */   "LikesPlaceHolder": function() { return /* binding */ LikesPlaceHolder; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Layout\\PlaceHolderGroup.js";



const PlaceHolderPosts = () => (0,lodash__WEBPACK_IMPORTED_MODULE_3__.range)(1, 3).map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    fluid: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Header, {
      image: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Paragraph, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
    hidden: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }, undefined)]
}, item, true, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 5
}, undefined));
const PlaceHolderSuggestions = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {
      color: "red",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Image, {
          square: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {
              length: "medium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
        extra: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          disabled: true,
          circular: true,
          size: "small",
          icon: "add user",
          content: "Follow",
          color: "twitter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined)
}, void 0, false);
const PlaceHolderNotifications = () => (0,lodash__WEBPACK_IMPORTED_MODULE_3__.range)(1, 10).map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Header, {
      image: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined)
  }, item, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 7
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
    hidden: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 7
  }, undefined)]
}, void 0, true));
const EndMessage = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
  textAlign: "center",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    name: "refresh",
    size: "large"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
    hidden: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 76,
  columnNumber: 3
}, undefined);
const LikesPlaceHolder = () => (0,lodash__WEBPACK_IMPORTED_MODULE_3__.range)(1, 6).map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
  style: {
    minWidth: "200px"
  },
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Header, {
    image: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Placeholder.Line, {
      length: "full"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 7
  }, undefined)
}, item, false, {
  fileName: _jsxFileName,
  lineNumber: 84,
  columnNumber: 5
}, undefined));

/***/ }),

/***/ "./components/Layout/Toastr.js":
/*!*************************************!*\
  !*** ./components/Layout/Toastr.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDeleteToastr": function() { return /* binding */ PostDeleteToastr; },
/* harmony export */   "ErrorToastr": function() { return /* binding */ ErrorToastr; },
/* harmony export */   "MsgSentToastr": function() { return /* binding */ MsgSentToastr; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Layout\\Toastr.js";

const PostDeleteToastr = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    children: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("Deleted Successfully", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};
const ErrorToastr = ({
  error
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    children: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};
const MsgSentToastr = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: false,
  children: react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Sent successfully", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  })
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 54,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/Post/CardPost.js":
/*!*************************************!*\
  !*** ./components/Post/CardPost.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");
/* harmony import */ var _ImageModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageModal */ "./components/Post/ImageModal.js");
/* harmony import */ var _NoImageModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NoImageModal */ "./components/Post/NoImageModal.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Post\\CardPost.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function CardPost({
  post,
  user,
  setPosts,
  setShowToastr,
  socket
}) {
  const {
    0: likes,
    1: setLikes
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.likes);
  const isLiked = likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;
  const {
    0: comments,
    1: setComments
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.comments);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const addPropsToModal = () => ({
    post,
    user,
    setLikes,
    likes,
    isLiked,
    comments,
    setComments
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      open: showModal,
      closeIcon: true,
      closeOnDimmerClick: true,
      onClose: () => setShowModal(false),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
        children: post.picUrl ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageModal__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({}, addPropsToModal()), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoImageModal__WEBPACK_IMPORTED_MODULE_10__.default, _objectSpread({}, addPropsToModal()), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
      basic: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {
        color: "teal",
        fluid: true,
        children: [post.picUrl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          src: post.picUrl,
          style: {
            cursor: "pointer"
          },
          floated: "left",
          wrapped: true,
          ui: false,
          alt: "PostImage",
          onClick: () => setShowModal(true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            floated: "left",
            src: post.user.profilePicUrl,
            avatar: true,
            circular: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), (user.role === "root" || post.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Popup, {
              on: "click",
              position: "top right",
              trigger: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                src: "/deleteIcon.svg",
                style: {
                  cursor: "pointer"
                },
                size: "mini",
                floated: "right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 21
              }, this),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
                as: "h4",
                content: "Are you sure?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "This action is irreversible!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                color: "red",
                icon: "trash",
                content: "Delete",
                onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.deletePost)(post._id, setPosts, setShowToastr)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, this)
          }, void 0, false), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: `/${post.user.username}`,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: post.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__.default)(post.createdAt)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            content: post.location
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 31
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
            style: {
              fontSize: "17px",
              letterSpacing: "0.1px",
              wordSpacing: "0.35px"
            },
            children: post.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
          extra: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: isLiked ? "heart" : "heart outline",
            color: "red",
            style: {
              cursor: "pointer"
            },
            onClick: () => {
              if (socket.current) {
                socket.current.emit("likePost", {
                  postId: post._id,
                  userId: user._id,
                  like: isLiked ? false : true
                });
                socket.current.on("postLiked", () => {
                  if (isLiked) {
                    setLikes(prev => prev.filter(like => like.user !== user._id));
                  } //
                  else {
                      setLikes(prev => [...prev, {
                        user: user._id
                      }]);
                    }
                });
              } else {
                (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.likePost)(post._id, user._id, setLikes, isLiked ? false : true);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_8__.default, {
            postId: post._id,
            trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "spanLikesList",
              children: `${likes.length} ${likes.length === 1 ? "like" : "likes"}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "comment outline",
            style: {
              marginLeft: "7px"
            },
            color: "blue"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this), comments.length > 0 && comments.map((comment, i) => i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_3__.default, {
            comment: comment,
            postId: post._id,
            user: user,
            setComments: setComments
          }, comment._id, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 21
          }, this)), comments.length > 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            content: "View More",
            color: "teal",
            basic: true,
            circular: true,
            onClick: () => setShowModal(true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
            hidden: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_4__.default, {
            user: user,
            postId: post._id,
            setComments: setComments
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
      hidden: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CardPost);

/***/ }),

/***/ "./components/Post/CommentInputField.js":
/*!**********************************************!*\
  !*** ./components/Post/CommentInputField.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Post\\CommentInputField.js";




function CommentInputField({
  postId,
  user,
  setComments
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    reply: true,
    onSubmit: async e => {
      e.preventDefault();
      setLoading(true);
      await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_3__.postComment)(postId, user, text, setComments, setText);
      setLoading(false);
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
      value: text,
      onChange: e => setText(e.target.value),
      placeholder: "Add Comment",
      action: {
        color: "blue",
        icon: "edit",
        loading: loading,
        disabled: text === "" || loading
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (CommentInputField);

/***/ }),

/***/ "./components/Post/CreatePost.js":
/*!***************************************!*\
  !*** ./components/Post/CreatePost.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _CropImageModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CropImageModal */ "./components/Post/CropImageModal.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Post\\CreatePost.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function CreatePost({
  user,
  setPosts
}) {
  const {
    0: newPost,
    1: setNewPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    text: "",
    location: ""
  });
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      if (files && files.length > 0) {
        setMedia(files[0]);
        setMediaPreview(URL.createObjectURL(files[0]));
      }
    }

    setNewPost(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "150px",
    width: "150px",
    border: "dotted",
    paddingTop: media === null && "60px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black"
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media !== null) {
      picUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_3__.default)(media);

      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_4__.submitNewPost)(newPost.text, newPost.location, picUrl, setPosts, setNewPost, setError);
    setMedia(null);
    mediaPreview && URL.revokeObjectURL(mediaPreview);
    setTimeout(() => setMediaPreview(null), 3000);
    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CropImageModal__WEBPACK_IMPORTED_MODULE_5__.default, {
      mediaPreview: mediaPreview,
      setMedia: setMedia,
      showModal: showModal,
      setShowModal: setShowModal
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
      error: error !== null,
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
        error: true,
        onDismiss: () => setError(null),
        content: error,
        header: "Oops!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          src: user.profilePicUrl,
          circular: true,
          avatar: true,
          inline: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.TextArea, {
          placeholder: "Whats Happening",
          name: "text",
          value: newPost.text,
          onChange: handleChange,
          rows: 4,
          width: 14
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
          value: newPost.location,
          name: "location",
          onChange: handleChange,
          label: "Add Location",
          icon: "map marker alternate",
          placeholder: "Want to add Location?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          ref: inputRef,
          onChange: handleChange,
          name: "media",
          style: {
            display: "none"
          },
          type: "file",
          accept: "image/*"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: () => inputRef.current.click(),
        style: addStyles(),
        onDragOver: e => {
          e.preventDefault();
          setHighlighted(true);
        },
        onDragLeave: e => {
          e.preventDefault();
          setHighlighted(false);
        },
        onDrop: e => {
          e.preventDefault();
          setHighlighted(true);
          const droppedFile = Array.from(e.dataTransfer.files);
          setMedia(droppedFile[0]);
          setMediaPreview(URL.createObjectURL(droppedFile[0]));
        },
        children: media === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "plus",
          size: "big"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
          style: {
            height: "150px",
            width: "150px"
          },
          src: mediaPreview,
          alt: "PostImage",
          centered: true,
          size: "medium"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), mediaPreview !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
          hidden: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          content: "Crop Image",
          type: "button",
          primary: true,
          circular: true,
          onClick: () => setShowModal(true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, this)]
      }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        circular: true,
        disabled: newPost.text === "" || loading,
        content: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Post"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 20
        }, this),
        style: {
          backgroundColor: "#1DA1F2",
          color: "white"
        },
        icon: "send",
        loading: loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

/***/ }),

/***/ "./components/Post/CropImageModal.js":
/*!*******************************************!*\
  !*** ./components/Post/CropImageModal.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cropper */ "react-cropper");
/* harmony import */ var react_cropper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cropper__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Post\\CropImageModal.js";




function CropImageModal({
  mediaPreview,
  setMedia,
  showModal,
  setShowModal
}) {
  const {
    0: cropper,
    1: setCropper
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const getCropData = () => {
    if (cropper) {
      setMedia(cropper.getCroppedCanvas().toDataURL());
      cropper.destroy();
    }

    setShowModal(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.addEventListener("keydown", ({
      key
    }) => {
      if (cropper) {
        if (key === "m") cropper.setDragMode("move");
        if (key === "c") cropper.setDragMode("crop");
        if (key === "r") cropper.reset();
      }
    });
  }, [cropper]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      closeOnDimmerClick: false,
      size: "large",
      onClose: () => setShowModal(false),
      open: showModal,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Header, {
        content: "Crop image before upload"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        columns: 2,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
            image: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_cropper__WEBPACK_IMPORTED_MODULE_3___default()), {
              style: {
                height: "400px",
                width: "100%"
              },
              cropBoxResizable: true,
              zoomable: true,
              highlight: true,
              responsive: true,
              guides: true,
              dragMode: "move",
              initialAspectRatio: 1,
              preview: ".img-preview",
              src: mediaPreview,
              viewMode: 1,
              minCropBoxHeight: 10,
              minContainerWidth: 10,
              background: false,
              autoCropArea: 1,
              checkOrientation: false,
              onInitialized: cropper => setCropper(cropper)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
            image: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
                as: "h2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                  name: "file image outline"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header.Content, {
                  content: "Final"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    width: "100%",
                    height: "300px",
                    display: "inline-block",
                    padding: "10px",
                    overflow: "hidden",
                    boxSizing: "border-box"
                  },
                  className: "img-preview"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Actions, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          title: "Reset (R)",
          icon: "redo",
          circular: true,
          onClick: () => cropper && cropper.reset()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          title: "Move Canvas (M)",
          icon: "move",
          circular: true,
          onClick: () => cropper && cropper.setDragMode("move")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          title: "New Cropbox (C)",
          icon: "crop",
          circular: true,
          onClick: () => cropper && cropper.setDragMode("crop")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          negative: true,
          content: "Cancel",
          icon: "cancel",
          onClick: () => setShowModal(false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          content: "Crop Image",
          icon: "checkmark",
          positive: true,
          onClick: getCropData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (CropImageModal);

/***/ }),

/***/ "./components/Post/ImageModal.js":
/*!***************************************!*\
  !*** ./components/Post/ImageModal.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Post\\ImageModal.js";









function ImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      columns: 2,
      stackable: true,
      relaxed: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Content, {
          image: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            wrapped: true,
            size: "large",
            src: post.picUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {
          fluid: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
              floated: "left",
              avatar: true,
              src: post.user.profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                href: `/${post.user.username}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: post.user.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
              children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__.default)(post.createdAt)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
              content: post.location
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
              style: {
                fontSize: "17px",
                letterSpacing: "0.1px",
                wordSpacing: "0.35px"
              },
              children: post.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
            extra: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: isLiked ? "heart" : "heart outline",
              color: "red",
              style: {
                cursor: "pointer"
              },
              onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.likePost)(post._id, user._id, setLikes, isLiked ? false : true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_8__.default, {
              postId: post._id,
              trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "spanLikesList",
                children: `${likes.length} ${likes.length === 1 ? "like" : "likes"}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
              hidden: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                overflow: "auto",
                height: comments.length > 2 ? "200px" : "60px",
                marginBottom: "8px"
              },
              children: comments.length > 0 && comments.map(comment => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_3__.default, {
                comment: comment,
                postId: post._id,
                user: user,
                setComments: setComments
              }, comment._id, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_4__.default, {
              postId: post._id,
              user: user,
              setComments: setComments
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (ImageModal);

/***/ }),

/***/ "./components/Post/LikesList.js":
/*!**************************************!*\
  !*** ./components/Post/LikesList.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_catchErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Post\\LikesList.js";







function LikesList({
  postId,
  trigger
}) {
  const {
    0: likesList,
    1: setLikesList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const getLikesList = async () => {
    setLoading(true);

    try {
      const res = await _utils_postActions__WEBPACK_IMPORTED_MODULE_6__.Axios.get(`/like/${postId}`);
      setLikesList(res.data);
    } catch (error) {
      alert((0,_utils_catchErrors__WEBPACK_IMPORTED_MODULE_3__.default)(error));
    }

    setLoading(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Popup, {
    on: "click",
    onClose: () => setLikesList([]),
    onOpen: getLikesList,
    popperDependencies: [likesList],
    trigger: trigger,
    wide: true,
    children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_5__.LikesPlaceHolder, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: likesList.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          overflow: "auto",
          maxHeight: "15rem",
          height: "15rem",
          minWidth: "210px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
          selection: true,
          size: "large",
          children: likesList.map(like => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
              avatar: true,
              src: like.user.profilePicUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Header, {
                onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/${like.user.username}`),
                as: "a",
                content: like.user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 21
            }, this)]
          }, like._id, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 19
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this)
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LikesList);

/***/ }),

/***/ "./components/Post/NoImageModal.js":
/*!*****************************************!*\
  !*** ./components/Post/NoImageModal.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
/* harmony import */ var _LikesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LikesList */ "./components/Post/LikesList.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Post\\NoImageModal.js";









function NoImageModal({
  post,
  user,
  setLikes,
  likes,
  isLiked,
  comments,
  setComments
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {
    fluid: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
        floated: "left",
        avatar: true,
        src: post.user.profilePicUrl
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: `/${post.user.username}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: post.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
        children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__.default)(post.createdAt)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), post.location && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
        content: post.location
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 27
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
        style: {
          fontSize: "17px",
          letterSpacing: "0.1px",
          wordSpacing: "0.35px"
        },
        children: post.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {
      extra: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: isLiked ? "heart" : "heart outline",
        color: "red",
        style: {
          cursor: "pointer"
        },
        onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_7__.likePost)(post._id, user._id, setLikes, isLiked ? false : true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LikesList__WEBPACK_IMPORTED_MODULE_8__.default, {
        postId: post._id,
        trigger: likes.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "spanLikesList",
          children: `${likes.length} ${likes.length === 1 ? "like" : "likes"}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          overflow: "auto",
          height: comments.length > 2 ? "200px" : "60px",
          marginBottom: "8px"
        },
        children: comments.length > 0 && comments.map(comment => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostComments__WEBPACK_IMPORTED_MODULE_3__.default, {
          comment: comment,
          postId: post._id,
          user: user,
          setComments: setComments
        }, comment._id, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CommentInputField__WEBPACK_IMPORTED_MODULE_4__.default, {
        postId: post._id,
        user: user,
        setComments: setComments
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NoImageModal);

/***/ }),

/***/ "./components/Post/PostComments.js":
/*!*****************************************!*\
  !*** ./components/Post/PostComments.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Post\\PostComments.js";





function PostComments({
  comment,
  user,
  setComments,
  postId
}) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Group, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Avatar, {
          src: comment.user.profilePicUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Content, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Author, {
            as: "a",
            href: `/${comment.user.username}`,
            children: comment.user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Metadata, {
            children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(comment.date)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Text, {
            children: comment.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Actions, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Action, {
              children: (user.role === "root" || comment.user._id === user._id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                disabled: disabled,
                color: "red",
                name: "trash",
                onClick: async () => {
                  setDisabled(true);
                  await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_4__.deleteComment)(postId, comment._id, setComments);
                  setDisabled(false);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (PostComments);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_getUserInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/getUserInfo */ "./utils/getUserInfo.js");
/* harmony import */ var _components_Home_MessageNotificationModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Home/MessageNotificationModal */ "./components/Home/MessageNotificationModal.js");
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var _components_Home_NotificationPortal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Home/NotificationPortal */ "./components/Home/NotificationPortal.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function Index({
  user,
  postsData,
  errorLoading
}) {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(postsData || []);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: pageNumber,
    1: setPageNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
  const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: newMessageReceived,
    1: setNewMessageReceived
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: newMessageModal,
    1: showNewMessageModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: newNotification,
    1: setNewNotification
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: notificationPopup,
    1: showNotificationPopup
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()((_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default()));
    }

    if (socket.current) {
      socket.current.emit("join", {
        userId: user._id
      });
      socket.current.on("newMsgReceived", async ({
        newMsg
      }) => {
        const {
          name,
          profilePicUrl
        } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_14__.default)(newMsg.sender);

        if (user.newMessagePopup) {
          setNewMessageReceived(_objectSpread(_objectSpread({}, newMsg), {}, {
            senderName: name,
            senderProfilePic: profilePicUrl
          }));
          showNewMessageModal(true);
        }

        (0,_utils_newMsgSound__WEBPACK_IMPORTED_MODULE_16__.default)(name);
      });
    }

    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  const fetchDataOnScroll = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/posts`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_13___default().get("token")
        },
        params: {
          pageNumber
        }
      });
      if (res.data.length === 0) setHasMore(false);
      setPosts(prev => [...prev, ...res.data]);
      setPageNumber(prev => prev + 1);
    } catch (error) {
      alert("Error fetching Posts");
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (socket.current) {
      socket.current.on("newNotificationReceived", ({
        name,
        profilePicUrl,
        username,
        postId
      }) => {
        setNewNotification({
          name,
          profilePicUrl,
          username,
          postId
        });
        showNotificationPopup(true);
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [notificationPopup && newNotification !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_NotificationPortal__WEBPACK_IMPORTED_MODULE_17__.default, {
      newNotification: newNotification,
      notificationPopup: notificationPopup,
      showNotificationPopup: showNotificationPopup
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }, this), showToastr && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_10__.PostDeleteToastr, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 22
    }, this), newMessageModal && newMessageReceived !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_MessageNotificationModal__WEBPACK_IMPORTED_MODULE_15__.default, {
      socket: socket,
      showNewMessageModal: showNewMessageModal,
      newMessageModal: newMessageModal,
      newMessageReceived: newMessageReceived,
      user: user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_5__.default, {
        user: user,
        setPosts: setPosts
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this), posts.length === 0 || errorLoading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_9__.NoPosts, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_11___default()), {
        hasMore: hasMore,
        next: fetchDataOnScroll,
        loader: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_12__.PlaceHolderPosts, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, this),
        endMessage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_12__.EndMessage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }, this),
        dataLength: posts.length,
        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_6__.default, {
          socket: socket,
          post: post,
          user: user,
          setPosts: setPosts,
          setShowToastr: setShowToastr
        }, post._id, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 15
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

Index.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_8__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/posts`, {
      headers: {
        Authorization: token
      },
      params: {
        pageNumber: 1
      }
    });
    return {
      postsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(module) {

const baseUrl =  true ? "http://localhost:3000" : 0;
module.exports = baseUrl;

/***/ }),

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\utils\\calculateTime.js";



const calculateTime = createdAt => {
  const today = moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now());
  const postDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  if (diffInHours < 24) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["Today ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 24 && diffInHours < 36) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: ["Yesterday ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
        format: "hh:mm A",
        children: createdAt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }, undefined)]
    }, void 0, true);
  } else if (diffInHours > 36) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
      format: "DD/MM/YYYY hh:mm A",
      children: createdAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTime);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "./utils/getUserInfo.js":
/*!******************************!*\
  !*** ./utils/getUserInfo.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);




const getUserInfo = async userToFindId => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/chats/user/${userToFindId}`, {
      headers: {
        Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get("token")
      }
    });
    return {
      name: res.data.name,
      profilePicUrl: res.data.profilePicUrl
    };
  } catch (error) {
    console.error(error);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getUserInfo);

/***/ }),

/***/ "./utils/newMsgSound.js":
/*!******************************!*\
  !*** ./utils/newMsgSound.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const newMsgSound = senderName => {
  const sound = new Audio("/light.mp3");
  sound && sound.play();

  if (senderName) {
    document.title = `New message from ${senderName}`;

    if (document.visibilityState === "visible") {
      setTimeout(() => {
        document.title = "Messages";
      }, 5000);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (newMsgSound);

/***/ }),

/***/ "./utils/postActions.js":
/*!******************************!*\
  !*** ./utils/postActions.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Axios": function() { return /* binding */ Axios; },
/* harmony export */   "submitNewPost": function() { return /* binding */ submitNewPost; },
/* harmony export */   "deletePost": function() { return /* binding */ deletePost; },
/* harmony export */   "likePost": function() { return /* binding */ likePost; },
/* harmony export */   "postComment": function() { return /* binding */ postComment; },
/* harmony export */   "deleteComment": function() { return /* binding */ deleteComment; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baseUrl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${(_baseUrl__WEBPACK_IMPORTED_MODULE_1___default())}/api/posts`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token")
  }
});
const submitNewPost = async (text, location, picUrl, setPosts, setNewPost, setError) => {
  try {
    const res = await Axios.post("/", {
      text,
      location,
      picUrl
    });
    setPosts(prev => [res.data, ...prev]);
    setNewPost({
      text: "",
      location: ""
    });
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};
const deletePost = async (postId, setPosts, setShowToastr) => {
  try {
    await Axios.delete(`/${postId}`);
    setPosts(prev => prev.filter(post => post._id !== postId));
    setShowToastr(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const likePost = async (postId, userId, setLikes, like = true) => {
  try {
    if (like) {
      await Axios.post(`/like/${postId}`);
      setLikes(prev => [...prev, {
        user: userId
      }]);
    } //
    else if (!like) {
        await Axios.put(`/unlike/${postId}`);
        setLikes(prev => prev.filter(like => like.user !== userId));
      }
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const postComment = async (postId, user, text, setComments, setText) => {
  try {
    const res = await Axios.post(`/comment/${postId}`, {
      text
    });
    const newComment = {
      _id: res.data,
      user,
      text,
      date: Date.now()
    };
    setComments(prev => [newComment, ...prev]);
    setText("");
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};
const deleteComment = async (postId, commentId, setComments) => {
  try {
    await Axios.delete(`/${postId}/${commentId}`);
    setComments(prev => prev.filter(comment => comment._id !== commentId));
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "social_media_app");
    form.append("cloud_name", "indersingh");
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(process.env.CLOUDINARY_URL, form);
    return res.data.url;
  } catch (error) {
    return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-cropper":
/*!********************************!*\
  !*** external "react-cropper" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-cropper");;

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-infinite-scroll-component");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Ib21lL01lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0hvbWUvTm90aWZpY2F0aW9uUG9ydGFsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9QbGFjZUhvbGRlckdyb3VwLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1RvYXN0ci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvQ2FyZFBvc3QuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NvbW1lbnRJbnB1dEZpZWxkLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9DcmVhdGVQb3N0LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Dcm9wSW1hZ2VNb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvSW1hZ2VNb2RhbC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvTGlrZXNMaXN0LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Ob0ltYWdlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3RDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2dldFVzZXJJbmZvLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL25ld01zZ1NvdW5kLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3Bvc3RBY3Rpb25zLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1jcm9wcGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvaWdub3JlZHxDOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXENoZWNrLW1haW5cXENoZWNrLW1haW5cXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJNZXNzYWdlTm90aWZpY2F0aW9uTW9kYWwiLCJzb2NrZXQiLCJzaG93TmV3TWVzc2FnZU1vZGFsIiwibmV3TWVzc2FnZU1vZGFsIiwibmV3TWVzc2FnZVJlY2VpdmVkIiwidXNlciIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm9uTW9kYWxDbG9zZSIsImZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwiZW1pdCIsInVzZXJJZCIsIl9pZCIsIm1zZ1NlbmRUb1VzZXJJZCIsInNlbmRlciIsIm1zZyIsIm9uIiwic2VuZGVyTmFtZSIsInNlbmRlclByb2ZpbGVQaWMiLCJjYWxjdWxhdGVUaW1lIiwiZGF0ZSIsInBvc2l0aW9uIiwiYm90dG9tIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsImljb24iLCJkaXNhYmxlZCIsIm1hcmdpblRvcCIsInVzZXJuYW1lIiwiSW5zdHJ1Y3Rpb25zIiwiTm90aWZpY2F0aW9uUG9ydGFsIiwibmV3Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uUG9wdXAiLCJzaG93Tm90aWZpY2F0aW9uUG9wdXAiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYW1lIiwicHJvZmlsZVBpY1VybCIsInBvc3RJZCIsImFuaW1hdGlvbiIsImR1cmF0aW9uIiwibmV3TXNnU291bmQiLCJyaWdodCIsInRvcCIsInpJbmRleCIsImZsb2F0IiwiY3Vyc29yIiwicHVzaCIsIkRhdGUiLCJub3ciLCJOb1Byb2ZpbGVQb3N0cyIsIk5vRm9sbG93RGF0YSIsImZvbGxvd2Vyc0NvbXBvbmVudCIsImZvbGxvd2luZ0NvbXBvbmVudCIsIk5vTWVzc2FnZXMiLCJOb1Bvc3RzIiwiTm9Qcm9maWxlIiwiTm9Ob3RpZmljYXRpb25zIiwiTm9Qb3N0Rm91bmQiLCJQbGFjZUhvbGRlclBvc3RzIiwicmFuZ2UiLCJtYXAiLCJpdGVtIiwiUGxhY2VIb2xkZXJTdWdnZXN0aW9ucyIsIlBsYWNlSG9sZGVyTm90aWZpY2F0aW9ucyIsIkVuZE1lc3NhZ2UiLCJMaWtlc1BsYWNlSG9sZGVyIiwibWluV2lkdGgiLCJQb3N0RGVsZXRlVG9hc3RyIiwidG9hc3QiLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsIkVycm9yVG9hc3RyIiwiZXJyb3IiLCJNc2dTZW50VG9hc3RyIiwiQ2FyZFBvc3QiLCJwb3N0Iiwic2V0UG9zdHMiLCJzZXRTaG93VG9hc3RyIiwibGlrZXMiLCJzZXRMaWtlcyIsImlzTGlrZWQiLCJsZW5ndGgiLCJmaWx0ZXIiLCJsaWtlIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsInNldEVycm9yIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiYWRkUHJvcHNUb01vZGFsIiwicGljVXJsIiwicm9sZSIsImRlbGV0ZVBvc3QiLCJjcmVhdGVkQXQiLCJsb2NhdGlvbiIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsIndvcmRTcGFjaW5nIiwicHJldiIsImxpa2VQb3N0IiwibWFyZ2luTGVmdCIsImNvbW1lbnQiLCJpIiwiQ29tbWVudElucHV0RmllbGQiLCJwb3N0Q29tbWVudCIsIkNyZWF0ZVBvc3QiLCJuZXdQb3N0Iiwic2V0TmV3UG9zdCIsImlucHV0UmVmIiwidXNlUmVmIiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsIm1lZGlhIiwic2V0TWVkaWEiLCJtZWRpYVByZXZpZXciLCJzZXRNZWRpYVByZXZpZXciLCJoYW5kbGVDaGFuZ2UiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFkZFN0eWxlcyIsInRleHRBbGlnbiIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImJvcmRlckNvbG9yIiwiaGFuZGxlU3VibWl0IiwidXBsb2FkUGljIiwic3VibWl0TmV3UG9zdCIsInJldm9rZU9iamVjdFVSTCIsInNldFRpbWVvdXQiLCJkaXNwbGF5IiwiY2xpY2siLCJkcm9wcGVkRmlsZSIsIkFycmF5IiwiZnJvbSIsImRhdGFUcmFuc2ZlciIsImJhY2tncm91bmRDb2xvciIsIkNyb3BJbWFnZU1vZGFsIiwiY3JvcHBlciIsInNldENyb3BwZXIiLCJnZXRDcm9wRGF0YSIsImdldENyb3BwZWRDYW52YXMiLCJ0b0RhdGFVUkwiLCJkZXN0cm95IiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleSIsInNldERyYWdNb2RlIiwicmVzZXQiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJib3hTaXppbmciLCJJbWFnZU1vZGFsIiwibWFyZ2luQm90dG9tIiwiTGlrZXNMaXN0IiwidHJpZ2dlciIsImxpa2VzTGlzdCIsInNldExpa2VzTGlzdCIsImdldExpa2VzTGlzdCIsInJlcyIsIkF4aW9zIiwiZGF0YSIsImFsZXJ0IiwiY2F0Y2hFcnJvcnMiLCJtYXhIZWlnaHQiLCJSb3V0ZXIiLCJOb0ltYWdlTW9kYWwiLCJQb3N0Q29tbWVudHMiLCJzZXREaXNhYmxlZCIsImRlbGV0ZUNvbW1lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJleHBvcnRzIiwiX3JlYWN0IiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiX3VzZUludGVyc2VjdGlvbiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsImluZGV4T2YiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiZGVmYXVsdCIsImNvbnNvbGUiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJqb2luIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ4IiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJpc05hTiIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIkluZGV4IiwicG9zdHNEYXRhIiwiZXJyb3JMb2FkaW5nIiwicG9zdHMiLCJzaG93VG9hc3RyIiwiaGFzTW9yZSIsInNldEhhc01vcmUiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInNldE5ld01lc3NhZ2VSZWNlaXZlZCIsInNldE5ld05vdGlmaWNhdGlvbiIsImlvIiwiYmFzZVVybCIsIm5ld01zZyIsImdldFVzZXJJbmZvIiwibmV3TWVzc2FnZVBvcHVwIiwidGl0bGUiLCJmZXRjaERhdGFPblNjcm9sbCIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb29raWUiLCJ0b2tlbiIsInBhcnNlQ29va2llcyIsIm1vZHVsZSIsInRvZGF5IiwibW9tZW50IiwicG9zdERhdGUiLCJkaWZmSW5Ib3VycyIsImRpZmYiLCJlcnJvck1zZyIsInJlc3BvbnNlIiwicmVxdWVzdCIsInVzZXJUb0ZpbmRJZCIsInNvdW5kIiwiQXVkaW8iLCJwbGF5IiwidmlzaWJpbGl0eVN0YXRlIiwiYmFzZVVSTCIsInB1dCIsIm5ld0NvbW1lbnQiLCJjb21tZW50SWQiLCJmb3JtIiwiRm9ybURhdGEiLCJlbnYiLCJDTE9VRElOQVJZX1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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LHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgTW9kYWwsIFNlZ21lbnQsIExpc3QsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XG5cbmZ1bmN0aW9uIE1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbCh7XG4gIHNvY2tldCxcbiAgc2hvd05ld01lc3NhZ2VNb2RhbCxcbiAgbmV3TWVzc2FnZU1vZGFsLFxuICBuZXdNZXNzYWdlUmVjZWl2ZWQsXG4gIHVzZXJcbn0pIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbk1vZGFsQ2xvc2UgPSAoKSA9PiBzaG93TmV3TWVzc2FnZU1vZGFsKGZhbHNlKTtcblxuICBjb25zdCBmb3JtU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZE1zZ0Zyb21Ob3RpZmljYXRpb25cIiwge1xuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgICAgICBtc2dTZW5kVG9Vc2VySWQ6IG5ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXIsXG4gICAgICAgIG1zZzogdGV4dFxuICAgICAgfSk7XG5cbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnU2VudEZyb21Ob3RpZmljYXRpb25cIiwgKCkgPT4ge1xuICAgICAgICBzaG93TmV3TWVzc2FnZU1vZGFsKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW9kYWxcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgb3Blbj17bmV3TWVzc2FnZU1vZGFsfVxuICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XG4gICAgICAgIGNsb3NlSWNvblxuICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2tcbiAgICAgID5cbiAgICAgICAgPE1vZGFsLkhlYWRlciBjb250ZW50PXtgTmV3IE1lc3NhZ2UgZnJvbSAke25ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXJOYW1lfWB9IC8+XG5cbiAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGVXcmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlubGluZUljb25cIiBzcmM9e25ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXJQcm9maWxlUGljfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJCdWJibGUgb3RoZXJcIj57bmV3TWVzc2FnZVJlY2VpdmVkLm1zZ308L2Rpdj5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3RoZXJcIj57Y2FsY3VsYXRlVGltZShuZXdNZXNzYWdlUmVjZWl2ZWQuZGF0ZSl9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJzdGlja3lcIiwgYm90dG9tOiBcIjBweFwiIH19PlxuICAgICAgICAgICAgPFNlZ21lbnQgc2Vjb25kYXJ5IGNvbG9yPVwidGVhbFwiIGF0dGFjaGVkPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgIDxGb3JtIHJlcGx5IG9uU3VibWl0PXtmb3JtU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VuZCBOZXcgTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ0ZWxlZ3JhbSBwbGFuZVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGV4dCA9PT0gXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbWVzc2FnZXM/bWVzc2FnZT0ke25ld01lc3NhZ2VSZWNlaXZlZC5zZW5kZXJ9YH0+XG4gICAgICAgICAgICAgIDxhPlZpZXcgQWxsIE1lc3NhZ2VzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPEluc3RydWN0aW9ucyB1c2VybmFtZT17dXNlci51c2VybmFtZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgICAgPC9Nb2RhbD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgSW5zdHJ1Y3Rpb25zID0gKHsgdXNlcm5hbWUgfSkgPT4gKFxuICA8TGlzdD5cbiAgICA8TGlzdC5JdGVtPlxuICAgICAgPEljb24gbmFtZT1cImhlbHBcIiAvPlxuICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgPExpc3QuSGVhZGVyPlxuICAgICAgICAgIElmIHlvdSBkbyBub3QgbGlrZSB0aGlzIHBvcHVwIHRvIGFwcGVhciB3aGVuIHlvdSByZWNlaXZlIGEgbmV3IG1lc3NhZ2U6XG4gICAgICAgIDwvTGlzdC5IZWFkZXI+XG4gICAgICA8L0xpc3QuQ29udGVudD5cbiAgICA8L0xpc3QuSXRlbT5cblxuICAgIDxMaXN0Lkl0ZW0+XG4gICAgICA8SWNvbiBuYW1lPVwiaGFuZCBwb2ludCByaWdodFwiIC8+XG4gICAgICA8TGlzdC5Db250ZW50PlxuICAgICAgICBZb3UgY2FuIGRpc2FibGUgaXQgYnkgZ29pbmcgdG9cbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3VzZXJuYW1lfWB9PlxuICAgICAgICAgIDxhPiBBY2NvdW50IDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICBQYWdlIGFuZCBjbGlja2luZyBvbiBTZXR0aW5ncyBUYWIuXG4gICAgICA8L0xpc3QuQ29udGVudD5cbiAgICA8L0xpc3QuSXRlbT5cblxuICAgIDxMaXN0Lkl0ZW0+XG4gICAgICA8SWNvbiBuYW1lPVwiaGFuZCBwb2ludCByaWdodFwiIC8+XG4gICAgICBJbnNpZGUgdGhlIG1lbnUsdGhlcmUgaXMgYW4gc2V0dGluZyBuYW1lZDogU2hvdyBOZXcgTWVzc2FnZSBQb3B1cD9cbiAgICA8L0xpc3QuSXRlbT5cblxuICAgIDxMaXN0Lkl0ZW0+XG4gICAgICA8SWNvbiBuYW1lPVwiaGFuZCBwb2ludCByaWdodFwiIC8+XG4gICAgICBKdXN0IHRvZ2dsZSB0aGUgc2V0dGluZyB0byBkaXNhYmxlL2VuYWJsZSB0aGUgTWVzc2FnZSBQb3B1cCB0byBhcHBlYXIuXG4gICAgPC9MaXN0Lkl0ZW0+XG4gIDwvTGlzdD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbDtcbiIsImltcG9ydCB7IFNlZ21lbnQsIFRyYW5zaXRpb25hYmxlUG9ydGFsLCBJY29uLCBGZWVkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgbmV3TXNnU291bmQgZnJvbSBcIi4uLy4uL3V0aWxzL25ld01zZ1NvdW5kXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XG5cbmZ1bmN0aW9uIE5vdGlmaWNhdGlvblBvcnRhbCh7XG4gIG5ld05vdGlmaWNhdGlvbixcbiAgbm90aWZpY2F0aW9uUG9wdXAsXG4gIHNob3dOb3RpZmljYXRpb25Qb3B1cFxufSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IG5hbWUsIHByb2ZpbGVQaWNVcmwsIHVzZXJuYW1lLCBwb3N0SWQgfSA9IG5ld05vdGlmaWNhdGlvbjtcblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2l0aW9uYWJsZVBvcnRhbFxuICAgICAgdHJhbnNpdGlvbj17eyBhbmltYXRpb246IFwiZmFkZSBsZWZ0XCIsIGR1cmF0aW9uOiBcIjUwMFwiIH19XG4gICAgICBvbkNsb3NlPXsoKSA9PiBub3RpZmljYXRpb25Qb3B1cCAmJiBzaG93Tm90aWZpY2F0aW9uUG9wdXAoZmFsc2UpfVxuICAgICAgb25PcGVuPXtuZXdNc2dTb3VuZH1cbiAgICAgIG9wZW49e25vdGlmaWNhdGlvblBvcHVwfVxuICAgID5cbiAgICAgIDxTZWdtZW50IHN0eWxlPXt7IHJpZ2h0OiBcIjUlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIsIHRvcDogXCIxMCVcIiwgekluZGV4OiAxMDAwIH19PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd05vdGlmaWNhdGlvblBvcHVwKGZhbHNlKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8RmVlZD5cbiAgICAgICAgICA8RmVlZC5FdmVudD5cbiAgICAgICAgICAgIDxGZWVkLkxhYmVsPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZmlsZVBpY1VybH0gLz5cbiAgICAgICAgICAgIDwvRmVlZC5MYWJlbD5cbiAgICAgICAgICAgIDxGZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxGZWVkLlN1bW1hcnk+XG4gICAgICAgICAgICAgICAgPEZlZWQuVXNlciBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgLyR7dXNlcm5hbWV9YCl9PntuYW1lfSA8L0ZlZWQuVXNlcj57XCIgXCJ9XG4gICAgICAgICAgICAgICAgbGlrZWQgeW91ciA8YSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Bvc3QvJHtwb3N0SWR9YCl9PiBwb3N0PC9hPlxuICAgICAgICAgICAgICAgIDxGZWVkLkRhdGU+e2NhbGN1bGF0ZVRpbWUoRGF0ZS5ub3coKSl9PC9GZWVkLkRhdGU+XG4gICAgICAgICAgICAgIDwvRmVlZC5TdW1tYXJ5PlxuICAgICAgICAgICAgPC9GZWVkLkNvbnRlbnQ+XG4gICAgICAgICAgPC9GZWVkLkV2ZW50PlxuICAgICAgICA8L0ZlZWQ+XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC9UcmFuc2l0aW9uYWJsZVBvcnRhbD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uUG9ydGFsO1xuIiwiaW1wb3J0IHsgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGVQb3N0cyA9ICgpID0+IChcbiAgPD5cbiAgICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJTb3JyeVwiIGNvbnRlbnQ9XCJVc2VyIGhhcyBub3QgcG9zdGVkIGFueXRoaW5nIHlldCFcIiAvPlxuICAgIDxCdXR0b24gaWNvbj1cImxvbmcgYXJyb3cgYWx0ZXJuYXRlIGxlZnRcIiBjb250ZW50PVwiR28gQmFja1wiIGFzPVwiYVwiIGhyZWY9XCIvXCIgLz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9Gb2xsb3dEYXRhID0gKHsgZm9sbG93ZXJzQ29tcG9uZW50LCBmb2xsb3dpbmdDb21wb25lbnQgfSkgPT4gKFxuICA8PlxuICAgIHtmb2xsb3dlcnNDb21wb25lbnQgJiYgKFxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD17YFVzZXIgZG9lcyBub3QgaGF2ZSBmb2xsb3dlcnNgfSAvPlxuICAgICl9XG5cbiAgICB7Zm9sbG93aW5nQ29tcG9uZW50ICYmIChcbiAgICAgIDxNZXNzYWdlIGljb249XCJ1c2VyIG91dGxpbmVcIiBpbmZvIGNvbnRlbnQ9e2BVc2VyIGRvZXMgbm90IGZvbGxvdyBhbnkgdXNlcnNgfSAvPlxuICAgICl9XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vTWVzc2FnZXMgPSAoKSA9PiAoXG4gIDxNZXNzYWdlXG4gICAgaW5mb1xuICAgIGljb249XCJ0ZWxlZ3JhbSBwbGFuZVwiXG4gICAgaGVhZGVyPVwiU29ycnlcIlxuICAgIGNvbnRlbnQ9XCJZb3UgaGF2ZSBub3QgbWVzc2FnZWQgYW55b25lIHlldC5TZWFyY2ggYWJvdmUgdG8gbWVzc2FnZSBzb21lb25lIVwiXG4gIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9Qb3N0cyA9ICgpID0+IChcbiAgPE1lc3NhZ2VcbiAgICBpbmZvXG4gICAgaWNvbj1cIm1laFwiXG4gICAgaGVhZGVyPVwiSGV5IVwiXG4gICAgY29udGVudD1cIk5vIFBvc3RzLiBNYWtlIHN1cmUgeW91IGhhdmUgZm9sbG93ZWQgc29tZW9uZS5cIlxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZSA9ICgpID0+IChcbiAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiSGV5IVwiIGNvbnRlbnQ9XCJObyBQcm9maWxlIEZvdW5kLlwiIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9Ob3RpZmljYXRpb25zID0gKCkgPT4gKFxuICA8TWVzc2FnZSBjb250ZW50PVwiTm8gTm90aWZpY2F0aW9uc1wiIGljb249XCJzbWlsZVwiIGluZm8gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBOb1Bvc3RGb3VuZCA9ICgpID0+IChcbiAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiSGV5IVwiIGNvbnRlbnQ9XCJObyBQb3N0IEZvdW5kLlwiIC8+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgUGxhY2Vob2xkZXIsXG4gIERpdmlkZXIsXG4gIExpc3QsXG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ29udGFpbmVyLFxuICBJY29uXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBjb25zdCBQbGFjZUhvbGRlclBvc3RzID0gKCkgPT5cbiAgcmFuZ2UoMSwgMykubWFwKGl0ZW0gPT4gKFxuICAgIDxkaXYga2V5PXtpdGVtfT5cbiAgICAgIDxQbGFjZWhvbGRlciBmbHVpZD5cbiAgICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlciBpbWFnZT5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgIDwvUGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgICAgICA8UGxhY2Vob2xkZXIuUGFyYWdyYXBoPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxuICAgICAgICAgIDxQbGFjZWhvbGRlci5MaW5lIC8+XG4gICAgICAgIDwvUGxhY2Vob2xkZXIuUGFyYWdyYXBoPlxuICAgICAgPC9QbGFjZWhvbGRlcj5cbiAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuICAgIDwvZGl2PlxuICApKTtcblxuZXhwb3J0IGNvbnN0IFBsYWNlSG9sZGVyU3VnZ2VzdGlvbnMgPSAoKSA9PiAoXG4gIDw+XG4gICAgPExpc3QuSXRlbT5cbiAgICAgIDxDYXJkIGNvbG9yPVwicmVkXCI+XG4gICAgICAgIDxQbGFjZWhvbGRlcj5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuSW1hZ2Ugc3F1YXJlIC8+XG4gICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyPlxuICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlcj5cbiAgICAgICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwibWVkaXVtXCIgLz5cbiAgICAgICAgICAgIDwvUGxhY2Vob2xkZXIuSGVhZGVyPlxuICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICAgIDwvQ2FyZC5Db250ZW50PlxuXG4gICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgIGNpcmN1bGFyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgaWNvbj1cImFkZCB1c2VyXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJGb2xsb3dcIlxuICAgICAgICAgICAgY29sb3I9XCJ0d2l0dGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0xpc3QuSXRlbT5cbiAgPC8+XG4pO1xuXG5leHBvcnQgY29uc3QgUGxhY2VIb2xkZXJOb3RpZmljYXRpb25zID0gKCkgPT5cbiAgcmFuZ2UoMSwgMTApLm1hcChpdGVtID0+IChcbiAgICA8PlxuICAgICAgPFBsYWNlaG9sZGVyIGtleT17aXRlbX0+XG4gICAgICAgIDxQbGFjZWhvbGRlci5IZWFkZXIgaW1hZ2U+XG4gICAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgLz5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIuTGluZSAvPlxuICAgICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cbiAgICAgIDwvUGxhY2Vob2xkZXI+XG4gICAgICA8RGl2aWRlciBoaWRkZW4gLz5cbiAgICA8Lz5cbiAgKSk7XG5cbmV4cG9ydCBjb25zdCBFbmRNZXNzYWdlID0gKCkgPT4gKFxuICA8Q29udGFpbmVyIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgIDxJY29uIG5hbWU9XCJyZWZyZXNoXCIgc2l6ZT1cImxhcmdlXCIgLz5cbiAgICA8RGl2aWRlciBoaWRkZW4gLz5cbiAgPC9Db250YWluZXI+XG4pO1xuXG5leHBvcnQgY29uc3QgTGlrZXNQbGFjZUhvbGRlciA9ICgpID0+XG4gIHJhbmdlKDEsIDYpLm1hcChpdGVtID0+IChcbiAgICA8UGxhY2Vob2xkZXIga2V5PXtpdGVtfSBzdHlsZT17eyBtaW5XaWR0aDogXCIyMDBweFwiIH19PlxuICAgICAgPFBsYWNlaG9sZGVyLkhlYWRlciBpbWFnZT5cbiAgICAgICAgPFBsYWNlaG9sZGVyLkxpbmUgbGVuZ3RoPVwiZnVsbFwiIC8+XG4gICAgICA8L1BsYWNlaG9sZGVyLkhlYWRlcj5cbiAgICA8L1BsYWNlaG9sZGVyPlxuICApKTtcbiIsImltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5leHBvcnQgY29uc3QgUG9zdERlbGV0ZVRvYXN0ciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VG9hc3RDb250YWluZXJcbiAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXG4gICAgICBhdXRvQ2xvc2U9ezMwMDB9XG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxuICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgY2xvc2VPbkNsaWNrXG4gICAgICBydGw9e2ZhbHNlfVxuICAgICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgICAgZHJhZ2dhYmxlXG4gICAgICBwYXVzZU9uSG92ZXI9e2ZhbHNlfT5cbiAgICAgIHt0b2FzdC5pbmZvKFwiRGVsZXRlZCBTdWNjZXNzZnVsbHlcIiwge1xuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tY2VudGVyXCIsXG4gICAgICAgIGF1dG9DbG9zZTogMzAwMCxcbiAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIHByb2dyZXNzOiB1bmRlZmluZWRcbiAgICAgIH0pfVxuICAgIDwvVG9hc3RDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgRXJyb3JUb2FzdHIgPSAoeyBlcnJvciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxuICAgICAgYXV0b0Nsb3NlPXszMDAwfVxuICAgICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cbiAgICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cbiAgICAgIGNsb3NlT25DbGlja1xuICAgICAgcnRsPXtmYWxzZX1cbiAgICAgIHBhdXNlT25Gb2N1c0xvc3NcbiAgICAgIGRyYWdnYWJsZVxuICAgICAgcGF1c2VPbkhvdmVyPXtmYWxzZX0+XG4gICAgICB7dG9hc3QuZXJyb3IoZXJyb3IsIHtcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxuICAgICAgICBhdXRvQ2xvc2U6IDMwMDAsXG4gICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkXG4gICAgICB9KX1cbiAgICA8L1RvYXN0Q29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IE1zZ1NlbnRUb2FzdHIgPSAoKSA9PiAoXG4gIDxUb2FzdENvbnRhaW5lclxuICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXG4gICAgYXV0b0Nsb3NlPXszMDAwfVxuICAgIGhpZGVQcm9ncmVzc0Jhcj17ZmFsc2V9XG4gICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgIGNsb3NlT25DbGlja1xuICAgIHJ0bD17ZmFsc2V9XG4gICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgIGRyYWdnYWJsZVxuICAgIHBhdXNlT25Ib3Zlcj17ZmFsc2V9PlxuICAgIHt0b2FzdC5zdWNjZXNzKFwiU2VudCBzdWNjZXNzZnVsbHlcIiwge1xuICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxuICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxuICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkXG4gICAgfSl9XG4gIDwvVG9hc3RDb250YWluZXI+XG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBJY29uLFxuICBJbWFnZSxcbiAgRGl2aWRlcixcbiAgU2VnbWVudCxcbiAgQnV0dG9uLFxuICBQb3B1cCxcbiAgSGVhZGVyLFxuICBNb2RhbFxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBQb3N0Q29tbWVudHMgZnJvbSBcIi4vUG9zdENvbW1lbnRzXCI7XG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBkZWxldGVQb3N0LCBsaWtlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xuaW1wb3J0IExpa2VzTGlzdCBmcm9tIFwiLi9MaWtlc0xpc3RcIjtcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gXCIuL0ltYWdlTW9kYWxcIjtcbmltcG9ydCBOb0ltYWdlTW9kYWwgZnJvbSBcIi4vTm9JbWFnZU1vZGFsXCI7XG5cbmZ1bmN0aW9uIENhcmRQb3N0KHsgcG9zdCwgdXNlciwgc2V0UG9zdHMsIHNldFNob3dUb2FzdHIsIHNvY2tldCB9KSB7XG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUocG9zdC5saWtlcyk7XG5cbiAgY29uc3QgaXNMaWtlZCA9XG4gICAgbGlrZXMubGVuZ3RoID4gMCAmJiBsaWtlcy5maWx0ZXIobGlrZSA9PiBsaWtlLnVzZXIgPT09IHVzZXIuX2lkKS5sZW5ndGggPiAwO1xuXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUocG9zdC5jb21tZW50cyk7XG5cbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGFkZFByb3BzVG9Nb2RhbCA9ICgpID0+ICh7XG4gICAgcG9zdCxcbiAgICB1c2VyLFxuICAgIHNldExpa2VzLFxuICAgIGxpa2VzLFxuICAgIGlzTGlrZWQsXG4gICAgY29tbWVudHMsXG4gICAgc2V0Q29tbWVudHNcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dNb2RhbCAmJiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIG9wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgICBjbG9zZUljb25cbiAgICAgICAgICBjbG9zZU9uRGltbWVyQ2xpY2tcbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICB7cG9zdC5waWNVcmwgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZU1vZGFsIHsuLi5hZGRQcm9wc1RvTW9kYWwoKX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxOb0ltYWdlTW9kYWwgey4uLmFkZFByb3BzVG9Nb2RhbCgpfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICApfVxuXG4gICAgICA8U2VnbWVudCBiYXNpYz5cbiAgICAgICAgPENhcmQgY29sb3I9XCJ0ZWFsXCIgZmx1aWQ+XG4gICAgICAgICAge3Bvc3QucGljVXJsICYmIChcbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3Bvc3QucGljVXJsfVxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcbiAgICAgICAgICAgICAgd3JhcHBlZFxuICAgICAgICAgICAgICB1aT17ZmFsc2V9XG4gICAgICAgICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8SW1hZ2UgZmxvYXRlZD1cImxlZnRcIiBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfSBhdmF0YXIgY2lyY3VsYXIgLz5cblxuICAgICAgICAgICAgeyh1c2VyLnJvbGUgPT09IFwicm9vdFwiIHx8IHBvc3QudXNlci5faWQgPT09IHVzZXIuX2lkKSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwidG9wIHJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZGVsZXRlSWNvbi5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWluaVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBjb250ZW50PVwiQXJlIHlvdSBzdXJlP1wiIC8+XG4gICAgICAgICAgICAgICAgICA8cD5UaGlzIGFjdGlvbiBpcyBpcnJldmVyc2libGUhPC9wPlxuXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBvc3QocG9zdC5faWQsIHNldFBvc3RzLCBzZXRTaG93VG9hc3RyKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudXNlci5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cblxuICAgICAgICAgICAgPENhcmQuTWV0YT57Y2FsY3VsYXRlVGltZShwb3N0LmNyZWF0ZWRBdCl9PC9DYXJkLk1ldGE+XG5cbiAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XG5cbiAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcbiAgICAgICAgICAgICAgICB3b3JkU3BhY2luZzogXCIwLjM1cHhcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cG9zdC50ZXh0fVxuICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuXG4gICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIG5hbWU9e2lzTGlrZWQgPyBcImhlYXJ0XCIgOiBcImhlYXJ0IG91dGxpbmVcIn1cbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJsaWtlUG9zdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RJZDogcG9zdC5faWQsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlci5faWQsXG4gICAgICAgICAgICAgICAgICAgIGxpa2U6IGlzTGlrZWQgPyBmYWxzZSA6IHRydWVcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBzb2NrZXQuY3VycmVudC5vbihcInBvc3RMaWtlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0xpa2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0TGlrZXMocHJldiA9PiBwcmV2LmZpbHRlcihsaWtlID0+IGxpa2UudXNlciAhPT0gdXNlci5faWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRMaWtlcyhwcmV2ID0+IFsuLi5wcmV2LCB7IHVzZXI6IHVzZXIuX2lkIH1dKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxMaWtlc0xpc3RcbiAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtgJHtsaWtlcy5sZW5ndGh9ICR7bGlrZXMubGVuZ3RoID09PSAxID8gXCJsaWtlXCIgOiBcImxpa2VzXCJ9YH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjb21tZW50IG91dGxpbmVcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjdweFwiIH19IGNvbG9yPVwiYmx1ZVwiIC8+XG5cbiAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChcbiAgICAgICAgICAgICAgICAoY29tbWVudCwgaSkgPT5cbiAgICAgICAgICAgICAgICAgIGkgPCAzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tbWVudC5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMyAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb250ZW50PVwiVmlldyBNb3JlXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRlYWxcIlxuICAgICAgICAgICAgICAgIGJhc2ljXG4gICAgICAgICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkIHVzZXI9e3VzZXJ9IHBvc3RJZD17cG9zdC5faWR9IHNldENvbW1lbnRzPXtzZXRDb21tZW50c30gLz5cbiAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9TZWdtZW50PlxuICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRQb3N0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBwb3N0Q29tbWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBDb21tZW50SW5wdXRGaWVsZCh7IHBvc3RJZCwgdXNlciwgc2V0Q29tbWVudHMgfSkge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1cbiAgICAgIHJlcGx5XG4gICAgICBvblN1Ym1pdD17YXN5bmMgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgYXdhaXQgcG9zdENvbW1lbnQocG9zdElkLCB1c2VyLCB0ZXh0LCBzZXRDb21tZW50cywgc2V0VGV4dCk7XG5cbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9fT5cbiAgICAgIDxGb3JtLklucHV0XG4gICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgQ29tbWVudFwiXG4gICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgICBpY29uOiBcImVkaXRcIixcbiAgICAgICAgICBsb2FkaW5nOiBsb2FkaW5nLFxuICAgICAgICAgIGRpc2FibGVkOiB0ZXh0ID09PSBcIlwiIHx8IGxvYWRpbmdcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50SW5wdXRGaWVsZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIEltYWdlLCBEaXZpZGVyLCBNZXNzYWdlLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi8uLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcbmltcG9ydCB7IHN1Ym1pdE5ld1Bvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcbmltcG9ydCBDcm9wSW1hZ2VNb2RhbCBmcm9tIFwiLi9Dcm9wSW1hZ2VNb2RhbFwiO1xuXG5mdW5jdGlvbiBDcmVhdGVQb3N0KHsgdXNlciwgc2V0UG9zdHMgfSkge1xuICBjb25zdCBbbmV3UG9zdCwgc2V0TmV3UG9zdF0gPSB1c2VTdGF0ZSh7IHRleHQ6IFwiXCIsIGxvY2F0aW9uOiBcIlwiIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xuXG4gICAgaWYgKG5hbWUgPT09IFwibWVkaWFcIikge1xuICAgICAgaWYgKGZpbGVzICYmIGZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pO1xuICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldE5ld1Bvc3QocHJldiA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcbiAgfTtcblxuICBjb25zdCBhZGRTdHlsZXMgPSAoKSA9PiAoe1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBoZWlnaHQ6IFwiMTUwcHhcIixcbiAgICB3aWR0aDogXCIxNTBweFwiLFxuICAgIGJvcmRlcjogXCJkb3R0ZWRcIixcbiAgICBwYWRkaW5nVG9wOiBtZWRpYSA9PT0gbnVsbCAmJiBcIjYwcHhcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIGJvcmRlckNvbG9yOiBoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiYmxhY2tcIlxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBsZXQgcGljVXJsO1xuXG4gICAgaWYgKG1lZGlhICE9PSBudWxsKSB7XG4gICAgICBwaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xuICAgICAgaWYgKCFwaWNVcmwpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybiBzZXRFcnJvcihcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhd2FpdCBzdWJtaXROZXdQb3N0KFxuICAgICAgbmV3UG9zdC50ZXh0LFxuICAgICAgbmV3UG9zdC5sb2NhdGlvbixcbiAgICAgIHBpY1VybCxcbiAgICAgIHNldFBvc3RzLFxuICAgICAgc2V0TmV3UG9zdCxcbiAgICAgIHNldEVycm9yXG4gICAgKTtcblxuICAgIHNldE1lZGlhKG51bGwpO1xuICAgIG1lZGlhUHJldmlldyAmJiBVUkwucmV2b2tlT2JqZWN0VVJMKG1lZGlhUHJldmlldyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRNZWRpYVByZXZpZXcobnVsbCksIDMwMDApO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICA8Q3JvcEltYWdlTW9kYWxcbiAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cbiAgICAgICAgICBzZXRNZWRpYT17c2V0TWVkaWF9XG4gICAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XG4gICAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9XG4gICAgICAgIC8+XG4gICAgICApfVxuXG4gICAgICA8Rm9ybSBlcnJvcj17ZXJyb3IgIT09IG51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgIGVycm9yXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvcihudWxsKX1cbiAgICAgICAgICBjb250ZW50PXtlcnJvcn1cbiAgICAgICAgICBoZWFkZXI9XCJPb3BzIVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICAgICAgPEltYWdlIHNyYz17dXNlci5wcm9maWxlUGljVXJsfSBjaXJjdWxhciBhdmF0YXIgaW5saW5lIC8+XG4gICAgICAgICAgPEZvcm0uVGV4dEFyZWFcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdHMgSGFwcGVuaW5nXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LnRleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcm93cz17NH1cbiAgICAgICAgICAgIHdpZHRoPXsxNH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG5cbiAgICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LmxvY2F0aW9ufVxuICAgICAgICAgICAgbmFtZT1cImxvY2F0aW9uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBsYWJlbD1cIkFkZCBMb2NhdGlvblwiXG4gICAgICAgICAgICBpY29uPVwibWFwIG1hcmtlciBhbHRlcm5hdGVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXYW50IHRvIGFkZCBMb2NhdGlvbj9cIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cbiAgICAgICAgICBzdHlsZT17YWRkU3R5bGVzKCl9XG4gICAgICAgICAgb25EcmFnT3Zlcj17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRHJhZ0xlYXZlPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRHJvcD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcblxuICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcblxuICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge21lZGlhID09PSBudWxsID8gKFxuICAgICAgICAgICAgPEljb24gbmFtZT1cInBsdXNcIiBzaXplPVwiYmlnXCIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxNTBweFwiLCB3aWR0aDogXCIxNTBweFwiIH19XG4gICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxuICAgICAgICAgICAgICBhbHQ9XCJQb3N0SW1hZ2VcIlxuICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge21lZGlhUHJldmlldyAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcm9wIEltYWdlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cblxuICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICBkaXNhYmxlZD17bmV3UG9zdC50ZXh0ID09PSBcIlwiIHx8IGxvYWRpbmd9XG4gICAgICAgICAgY29udGVudD17PHN0cm9uZz5Qb3N0PC9zdHJvbmc+fVxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMURBMUYyXCIsIGNvbG9yOiBcIndoaXRlXCIgfX1cbiAgICAgICAgICBpY29uPVwic2VuZFwiXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBvc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwsIEhlYWRlciwgQnV0dG9uLCBHcmlkLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ3JvcHBlciBmcm9tIFwicmVhY3QtY3JvcHBlclwiO1xuXG5mdW5jdGlvbiBDcm9wSW1hZ2VNb2RhbCh7IG1lZGlhUHJldmlldywgc2V0TWVkaWEsIHNob3dNb2RhbCwgc2V0U2hvd01vZGFsIH0pIHtcbiAgY29uc3QgW2Nyb3BwZXIsIHNldENyb3BwZXJdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBnZXRDcm9wRGF0YSA9ICgpID0+IHtcbiAgICBpZiAoY3JvcHBlcikge1xuICAgICAgc2V0TWVkaWEoY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKCkudG9EYXRhVVJMKCkpO1xuICAgICAgY3JvcHBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoeyBrZXkgfSkgPT4ge1xuICAgICAgaWYgKGNyb3BwZXIpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJtXCIpIGNyb3BwZXIuc2V0RHJhZ01vZGUoXCJtb3ZlXCIpO1xuICAgICAgICBpZiAoa2V5ID09PSBcImNcIikgY3JvcHBlci5zZXREcmFnTW9kZShcImNyb3BcIik7XG4gICAgICAgIGlmIChrZXkgPT09IFwiclwiKSBjcm9wcGVyLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtjcm9wcGVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsXG4gICAgICAgIGNsb3NlT25EaW1tZXJDbGljaz17ZmFsc2V9XG4gICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgIG9wZW49e3Nob3dNb2RhbH1cbiAgICAgID5cbiAgICAgICAgPE1vZGFsLkhlYWRlciBjb250ZW50PVwiQ3JvcCBpbWFnZSBiZWZvcmUgdXBsb2FkXCIgLz5cblxuICAgICAgICA8R3JpZCBjb2x1bW5zPXsyfT5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8TW9kYWwuQ29udGVudCBpbWFnZT5cbiAgICAgICAgICAgICAgPENyb3BwZXJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNDAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgY3JvcEJveFJlc2l6YWJsZVxuICAgICAgICAgICAgICAgIHpvb21hYmxlXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0XG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICAgIGd1aWRlc1xuICAgICAgICAgICAgICAgIGRyYWdNb2RlPVwibW92ZVwiXG4gICAgICAgICAgICAgICAgaW5pdGlhbEFzcGVjdFJhdGlvPXsxfVxuICAgICAgICAgICAgICAgIHByZXZpZXc9XCIuaW1nLXByZXZpZXdcIlxuICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxuICAgICAgICAgICAgICAgIHZpZXdNb2RlPXsxfVxuICAgICAgICAgICAgICAgIG1pbkNyb3BCb3hIZWlnaHQ9ezEwfVxuICAgICAgICAgICAgICAgIG1pbkNvbnRhaW5lcldpZHRoPXsxMH1cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBhdXRvQ3JvcEFyZWE9ezF9XG4gICAgICAgICAgICAgICAgY2hlY2tPcmllbnRhdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgb25Jbml0aWFsaXplZD17Y3JvcHBlciA9PiBzZXRDcm9wcGVyKGNyb3BwZXIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8TW9kYWwuQ29udGVudCBpbWFnZT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgPEhlYWRlci5Db250ZW50IGNvbnRlbnQ9XCJGaW5hbFwiIC8+XG4gICAgICAgICAgICAgICAgPC9IZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgIDxNb2RhbC5BY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHRpdGxlPVwiUmVzZXQgKFIpXCJcbiAgICAgICAgICAgIGljb249XCJyZWRvXCJcbiAgICAgICAgICAgIGNpcmN1bGFyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjcm9wcGVyICYmIGNyb3BwZXIucmVzZXQoKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIENhbnZhcyAoTSlcIlxuICAgICAgICAgICAgaWNvbj1cIm1vdmVcIlxuICAgICAgICAgICAgY2lyY3VsYXJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyb3BwZXIgJiYgY3JvcHBlci5zZXREcmFnTW9kZShcIm1vdmVcIil9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHRpdGxlPVwiTmV3IENyb3Bib3ggKEMpXCJcbiAgICAgICAgICAgIGljb249XCJjcm9wXCJcbiAgICAgICAgICAgIGNpcmN1bGFyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjcm9wcGVyICYmIGNyb3BwZXIuc2V0RHJhZ01vZGUoXCJjcm9wXCIpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBuZWdhdGl2ZVxuICAgICAgICAgICAgY29udGVudD1cIkNhbmNlbFwiXG4gICAgICAgICAgICBpY29uPVwiY2FuY2VsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIkNyb3AgSW1hZ2VcIiBpY29uPVwiY2hlY2ttYXJrXCIgcG9zaXRpdmUgb25DbGljaz17Z2V0Q3JvcERhdGF9IC8+XG4gICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyb3BJbWFnZU1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwsIEdyaWQsIEltYWdlLCBDYXJkLCBJY29uLCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gXCIuL0NvbW1lbnRJbnB1dEZpZWxkXCI7XG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbGlrZVBvc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcG9zdEFjdGlvbnNcIjtcbmltcG9ydCBMaWtlc0xpc3QgZnJvbSBcIi4vTGlrZXNMaXN0XCI7XG5cbmZ1bmN0aW9uIEltYWdlTW9kYWwoe1xuICBwb3N0LFxuICB1c2VyLFxuICBzZXRMaWtlcyxcbiAgbGlrZXMsXG4gIGlzTGlrZWQsXG4gIGNvbW1lbnRzLFxuICBzZXRDb21tZW50c1xufSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8R3JpZCBjb2x1bW5zPXsyfSBzdGFja2FibGUgcmVsYXhlZD5cbiAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgIDxNb2RhbC5Db250ZW50IGltYWdlPlxuICAgICAgICAgICAgPEltYWdlIHdyYXBwZWQgc2l6ZT1cImxhcmdlXCIgc3JjPXtwb3N0LnBpY1VybH0gLz5cbiAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgIDxDYXJkIGZsdWlkPlxuICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgPEltYWdlIGZsb2F0ZWQ9XCJsZWZ0XCIgYXZhdGFyIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG5cbiAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cblxuICAgICAgICAgICAgICA8Q2FyZC5NZXRhPntjYWxjdWxhdGVUaW1lKHBvc3QuY3JlYXRlZEF0KX08L0NhcmQuTWV0YT5cblxuICAgICAgICAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxuXG4gICAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcbiAgICAgICAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge3Bvc3QudGV4dH1cbiAgICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG5cbiAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxuICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxMaWtlc0xpc3RcbiAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgICAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5MaWtlc0xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNvbW1lbnRzLmxlbmd0aCA+IDIgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIlxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICBjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0Q29tbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8Q29tbWVudElucHV0RmllbGRcbiAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZU1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaXN0LCBQb3B1cCwgSW1hZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi4vLi4vdXRpbHMvY2F0Y2hFcnJvcnNcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMaWtlc1BsYWNlSG9sZGVyIH0gZnJvbSBcIi4uL0xheW91dC9QbGFjZUhvbGRlckdyb3VwXCI7XG5pbXBvcnQgeyBBeGlvcyB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBMaWtlc0xpc3QoeyBwb3N0SWQsIHRyaWdnZXIgfSkge1xuICBjb25zdCBbbGlrZXNMaXN0LCBzZXRMaWtlc0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZ2V0TGlrZXNMaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLmdldChgL2xpa2UvJHtwb3N0SWR9YCk7XG4gICAgICBzZXRMaWtlc0xpc3QocmVzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQb3B1cFxuICAgICAgb249XCJjbGlja1wiXG4gICAgICBvbkNsb3NlPXsoKSA9PiBzZXRMaWtlc0xpc3QoW10pfVxuICAgICAgb25PcGVuPXtnZXRMaWtlc0xpc3R9XG4gICAgICBwb3BwZXJEZXBlbmRlbmNpZXM9e1tsaWtlc0xpc3RdfVxuICAgICAgdHJpZ2dlcj17dHJpZ2dlcn1cbiAgICAgIHdpZGVcbiAgICA+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPExpa2VzUGxhY2VIb2xkZXIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2xpa2VzTGlzdC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBcIjE1cmVtXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1cmVtXCIsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMjEwcHhcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGlzdCBzZWxlY3Rpb24gc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgICAge2xpa2VzTGlzdC5tYXAobGlrZSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17bGlrZS5faWR9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYXZhdGFyIHNyYz17bGlrZS51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5IZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKGAvJHtsaWtlLnVzZXIudXNlcm5hbWV9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17bGlrZS51c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvUG9wdXA+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpa2VzTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBJbWFnZSwgQ2FyZCwgSWNvbiwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcbmltcG9ydCBDb21tZW50SW5wdXRGaWVsZCBmcm9tIFwiLi9Db21tZW50SW5wdXRGaWVsZFwiO1xuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGxpa2VQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XG5pbXBvcnQgTGlrZXNMaXN0IGZyb20gXCIuL0xpa2VzTGlzdFwiO1xuXG5mdW5jdGlvbiBOb0ltYWdlTW9kYWwoe1xuICBwb3N0LFxuICB1c2VyLFxuICBzZXRMaWtlcyxcbiAgbGlrZXMsXG4gIGlzTGlrZWQsXG4gIGNvbW1lbnRzLFxuICBzZXRDb21tZW50c1xufSkge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIGZsdWlkPlxuICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgPEltYWdlIGZsb2F0ZWQ9XCJsZWZ0XCIgYXZhdGFyIHNyYz17cG9zdC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG5cbiAgICAgICAgPENhcmQuSGVhZGVyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XG4gICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9DYXJkLkhlYWRlcj5cblxuICAgICAgICA8Q2FyZC5NZXRhPntjYWxjdWxhdGVUaW1lKHBvc3QuY3JlYXRlZEF0KX08L0NhcmQuTWV0YT5cblxuICAgICAgICB7cG9zdC5sb2NhdGlvbiAmJiA8Q2FyZC5NZXRhIGNvbnRlbnQ9e3Bvc3QubG9jYXRpb259IC8+fVxuXG4gICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4xcHhcIixcbiAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIjAuMzVweFwiXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3Bvc3QudGV4dH1cbiAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XG5cbiAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxuICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIGxpa2VQb3N0KHBvc3QuX2lkLCB1c2VyLl9pZCwgc2V0TGlrZXMsIGlzTGlrZWQgPyBmYWxzZSA6IHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxMaWtlc0xpc3RcbiAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxuICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgbGlrZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5MaWtlc0xpc3RcIj5cbiAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IGNvbW1lbnRzLmxlbmd0aCA+IDIgPyBcIjIwMHB4XCIgOiBcIjYwcHhcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIlxuICAgICAgICAgIH19PlxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBjb21tZW50cy5tYXAoY29tbWVudCA9PiAoXG4gICAgICAgICAgICAgIDxQb3N0Q29tbWVudHNcbiAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxuICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XG4gICAgICAgICAgICAgICAgcG9zdElkPXtwb3N0Ll9pZH1cbiAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Q29tbWVudElucHV0RmllbGQgcG9zdElkPXtwb3N0Ll9pZH0gdXNlcj17dXNlcn0gc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfSAvPlxuICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb0ltYWdlTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbW1lbnQsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBjYWxjdWxhdGVUaW1lIGZyb20gXCIuLi8uLi91dGlscy9jYWxjdWxhdGVUaW1lXCI7XG5pbXBvcnQgeyBkZWxldGVDb21tZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIFBvc3RDb21tZW50cyh7IGNvbW1lbnQsIHVzZXIsIHNldENvbW1lbnRzLCBwb3N0SWQgfSkge1xuICBjb25zdCBbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29tbWVudC5Hcm91cD5cbiAgICAgICAgPENvbW1lbnQ+XG4gICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y29tbWVudC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XG4gICAgICAgICAgPENvbW1lbnQuQ29udGVudD5cbiAgICAgICAgICAgIDxDb21tZW50LkF1dGhvciBhcz1cImFcIiBocmVmPXtgLyR7Y29tbWVudC51c2VyLnVzZXJuYW1lfWB9PlxuICAgICAgICAgICAgICB7Y29tbWVudC51c2VyLm5hbWV9XG4gICAgICAgICAgICA8L0NvbW1lbnQuQXV0aG9yPlxuICAgICAgICAgICAgPENvbW1lbnQuTWV0YWRhdGE+e2NhbGN1bGF0ZVRpbWUoY29tbWVudC5kYXRlKX08L0NvbW1lbnQuTWV0YWRhdGE+XG5cbiAgICAgICAgICAgIDxDb21tZW50LlRleHQ+e2NvbW1lbnQudGV4dH08L0NvbW1lbnQuVGV4dD5cblxuICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9ucz5cbiAgICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9uPlxuICAgICAgICAgICAgICAgIHsodXNlci5yb2xlID09PSBcInJvb3RcIiB8fCBjb21tZW50LnVzZXIuX2lkID09PSB1c2VyLl9pZCkgJiYgKFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVDb21tZW50KHBvc3RJZCwgY29tbWVudC5faWQsIHNldENvbW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ29tbWVudC5BY3Rpb24+XG4gICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9ucz5cbiAgICAgICAgICA8L0NvbW1lbnQuQ29udGVudD5cbiAgICAgICAgPC9Db21tZW50PlxuICAgICAgPC9Db21tZW50Lkdyb3VwPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29tbWVudHM7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XG5pbXBvcnQgQ3JlYXRlUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3RcIjtcbmltcG9ydCBDYXJkUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0XCI7XG5pbXBvcnQgeyBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IHsgTm9Qb3N0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcbmltcG9ydCB7IFBvc3REZWxldGVUb2FzdHIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyXCI7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIjtcbmltcG9ydCB7IFBsYWNlSG9sZGVyUG9zdHMsIEVuZE1lc3NhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvUGxhY2VIb2xkZXJHcm91cFwiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgZ2V0VXNlckluZm8gZnJvbSBcIi4uL3V0aWxzL2dldFVzZXJJbmZvXCI7XG5pbXBvcnQgTWVzc2FnZU5vdGlmaWNhdGlvbk1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvTWVzc2FnZU5vdGlmaWNhdGlvbk1vZGFsXCI7XG5pbXBvcnQgbmV3TXNnU291bmQgZnJvbSBcIi4uL3V0aWxzL25ld01zZ1NvdW5kXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uUG9ydGFsIGZyb20gXCIuLi9jb21wb25lbnRzL0hvbWUvTm90aWZpY2F0aW9uUG9ydGFsXCI7XG5cbmZ1bmN0aW9uIEluZGV4KHsgdXNlciwgcG9zdHNEYXRhLCBlcnJvckxvYWRpbmcgfSkge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzRGF0YSB8fCBbXSk7XG4gIGNvbnN0IFtzaG93VG9hc3RyLCBzZXRTaG93VG9hc3RyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hhc01vcmUsIHNldEhhc01vcmVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgW3BhZ2VOdW1iZXIsIHNldFBhZ2VOdW1iZXJdID0gdXNlU3RhdGUoMik7XG5cbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgW25ld01lc3NhZ2VSZWNlaXZlZCwgc2V0TmV3TWVzc2FnZVJlY2VpdmVkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbmV3TWVzc2FnZU1vZGFsLCBzaG93TmV3TWVzc2FnZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbbmV3Tm90aWZpY2F0aW9uLCBzZXROZXdOb3RpZmljYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtub3RpZmljYXRpb25Qb3B1cCwgc2hvd05vdGlmaWNhdGlvblBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc29ja2V0LmN1cnJlbnQpIHtcbiAgICAgIHNvY2tldC5jdXJyZW50ID0gaW8oYmFzZVVybCk7XG4gICAgfVxuXG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwiam9pblwiLCB7IHVzZXJJZDogdXNlci5faWQgfSk7XG5cbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibmV3TXNnUmVjZWl2ZWRcIiwgYXN5bmMgKHsgbmV3TXNnIH0pID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljVXJsIH0gPSBhd2FpdCBnZXRVc2VySW5mbyhuZXdNc2cuc2VuZGVyKTtcblxuICAgICAgICBpZiAodXNlci5uZXdNZXNzYWdlUG9wdXApIHtcbiAgICAgICAgICBzZXROZXdNZXNzYWdlUmVjZWl2ZWQoe1xuICAgICAgICAgICAgLi4ubmV3TXNnLFxuICAgICAgICAgICAgc2VuZGVyTmFtZTogbmFtZSxcbiAgICAgICAgICAgIHNlbmRlclByb2ZpbGVQaWM6IHByb2ZpbGVQaWNVcmxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzaG93TmV3TWVzc2FnZU1vZGFsKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIG5ld01zZ1NvdW5kKG5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQudGl0bGUgPSBgV2VsY29tZSwgJHt1c2VyLm5hbWUuc3BsaXQoXCIgXCIpWzBdfWA7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNob3dUb2FzdHIgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VG9hc3RyKGZhbHNlKSwgMzAwMCk7XG4gIH0sIFtzaG93VG9hc3RyXSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhT25TY3JvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0sXG4gICAgICAgIHBhcmFtczogeyBwYWdlTnVtYmVyIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSBzZXRIYXNNb3JlKGZhbHNlKTtcblxuICAgICAgc2V0UG9zdHMocHJldiA9PiBbLi4ucHJldiwgLi4ucmVzLmRhdGFdKTtcbiAgICAgIHNldFBhZ2VOdW1iZXIocHJldiA9PiBwcmV2ICsgMSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3IgZmV0Y2hpbmcgUG9zdHNcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcbiAgICAgICAgXCJuZXdOb3RpZmljYXRpb25SZWNlaXZlZFwiLFxuICAgICAgICAoeyBuYW1lLCBwcm9maWxlUGljVXJsLCB1c2VybmFtZSwgcG9zdElkIH0pID0+IHtcbiAgICAgICAgICBzZXROZXdOb3RpZmljYXRpb24oeyBuYW1lLCBwcm9maWxlUGljVXJsLCB1c2VybmFtZSwgcG9zdElkIH0pO1xuXG4gICAgICAgICAgc2hvd05vdGlmaWNhdGlvblBvcHVwKHRydWUpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtub3RpZmljYXRpb25Qb3B1cCAmJiBuZXdOb3RpZmljYXRpb24gIT09IG51bGwgJiYgKFxuICAgICAgICA8Tm90aWZpY2F0aW9uUG9ydGFsXG4gICAgICAgICAgbmV3Tm90aWZpY2F0aW9uPXtuZXdOb3RpZmljYXRpb259XG4gICAgICAgICAgbm90aWZpY2F0aW9uUG9wdXA9e25vdGlmaWNhdGlvblBvcHVwfVxuICAgICAgICAgIHNob3dOb3RpZmljYXRpb25Qb3B1cD17c2hvd05vdGlmaWNhdGlvblBvcHVwfVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAge3Nob3dUb2FzdHIgJiYgPFBvc3REZWxldGVUb2FzdHIgLz59XG5cbiAgICAgIHtuZXdNZXNzYWdlTW9kYWwgJiYgbmV3TWVzc2FnZVJlY2VpdmVkICE9PSBudWxsICYmIChcbiAgICAgICAgPE1lc3NhZ2VOb3RpZmljYXRpb25Nb2RhbFxuICAgICAgICAgIHNvY2tldD17c29ja2V0fVxuICAgICAgICAgIHNob3dOZXdNZXNzYWdlTW9kYWw9e3Nob3dOZXdNZXNzYWdlTW9kYWx9XG4gICAgICAgICAgbmV3TWVzc2FnZU1vZGFsPXtuZXdNZXNzYWdlTW9kYWx9XG4gICAgICAgICAgbmV3TWVzc2FnZVJlY2VpdmVkPXtuZXdNZXNzYWdlUmVjZWl2ZWR9XG4gICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxTZWdtZW50PlxuICAgICAgICA8Q3JlYXRlUG9zdCB1c2VyPXt1c2VyfSBzZXRQb3N0cz17c2V0UG9zdHN9IC8+XG5cbiAgICAgICAge3Bvc3RzLmxlbmd0aCA9PT0gMCB8fCBlcnJvckxvYWRpbmcgPyAoXG4gICAgICAgICAgPE5vUG9zdHMgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgICAgIGhhc01vcmU9e2hhc01vcmV9XG4gICAgICAgICAgICBuZXh0PXtmZXRjaERhdGFPblNjcm9sbH1cbiAgICAgICAgICAgIGxvYWRlcj17PFBsYWNlSG9sZGVyUG9zdHMgLz59XG4gICAgICAgICAgICBlbmRNZXNzYWdlPXs8RW5kTWVzc2FnZSAvPn1cbiAgICAgICAgICAgIGRhdGFMZW5ndGg9e3Bvc3RzLmxlbmd0aH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZFBvc3RcbiAgICAgICAgICAgICAgICBzb2NrZXQ9e3NvY2tldH1cbiAgICAgICAgICAgICAgICBrZXk9e3Bvc3QuX2lkfVxuICAgICAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XG4gICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICBzZXRQb3N0cz17c2V0UG9zdHN9XG4gICAgICAgICAgICAgICAgc2V0U2hvd1RvYXN0cj17c2V0U2hvd1RvYXN0cn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgICAgICl9XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC8+XG4gICk7XG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCwge1xuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxuICAgICAgcGFyYW1zOiB7IHBhZ2VOdW1iZXI6IDEgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgcG9zdHNEYXRhOiByZXMuZGF0YSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsImNvbnN0IGJhc2VVcmwgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCJcbiAgICA/IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcbiAgICA6IFwiaHR0cHM6Ly9pbmRlci1zb2NpYWwtbWVkaWEyLmhlcm9rdWFwcC5jb21cIjtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVXJsO1xuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcblxuY29uc3QgY2FsY3VsYXRlVGltZSA9IGNyZWF0ZWRBdCA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KERhdGUubm93KCkpO1xuICBjb25zdCBwb3N0RGF0ZSA9IG1vbWVudChjcmVhdGVkQXQpO1xuICBjb25zdCBkaWZmSW5Ib3VycyA9IHRvZGF5LmRpZmYocG9zdERhdGUsIFwiaG91cnNcIik7XG5cbiAgaWYgKGRpZmZJbkhvdXJzIDwgMjQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgVG9kYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSBpZiAoZGlmZkluSG91cnMgPiAyNCAmJiBkaWZmSW5Ib3VycyA8IDM2KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIFllc3RlcmRheSA8TW9tZW50IGZvcm1hdD1cImhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDM2KSB7XG4gICAgcmV0dXJuIDxNb21lbnQgZm9ybWF0PVwiREQvTU0vWVlZWSBoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD47XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZVRpbWU7XG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IGVycm9yID0+IHtcbiAgbGV0IGVycm9yTXNnO1xuXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcblxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcblxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xuXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XG4gIH1cbiAgcmV0dXJuIGVycm9yTXNnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcblxuY29uc3QgZ2V0VXNlckluZm8gPSBhc3luYyB1c2VyVG9GaW5kSWQgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvY2hhdHMvdXNlci8ke3VzZXJUb0ZpbmRJZH1gLCB7XG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBuYW1lOiByZXMuZGF0YS5uYW1lLCBwcm9maWxlUGljVXJsOiByZXMuZGF0YS5wcm9maWxlUGljVXJsIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFVzZXJJbmZvO1xuIiwiY29uc3QgbmV3TXNnU291bmQgPSBzZW5kZXJOYW1lID0+IHtcbiAgY29uc3Qgc291bmQgPSBuZXcgQXVkaW8oXCIvbGlnaHQubXAzXCIpO1xuXG4gIHNvdW5kICYmIHNvdW5kLnBsYXkoKTtcblxuICBpZiAoc2VuZGVyTmFtZSkge1xuICAgIGRvY3VtZW50LnRpdGxlID0gYE5ldyBtZXNzYWdlIGZyb20gJHtzZW5kZXJOYW1lfWA7XG5cbiAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJNZXNzYWdlc1wiO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuZXdNc2dTb3VuZDtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5cbmV4cG9ydCBjb25zdCBBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsXG4gIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cbn0pO1xuXG5leHBvcnQgY29uc3Qgc3VibWl0TmV3UG9zdCA9IGFzeW5jIChcbiAgdGV4dCxcbiAgbG9jYXRpb24sXG4gIHBpY1VybCxcbiAgc2V0UG9zdHMsXG4gIHNldE5ld1Bvc3QsXG4gIHNldEVycm9yXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBBeGlvcy5wb3N0KFwiL1wiLCB7IHRleHQsIGxvY2F0aW9uLCBwaWNVcmwgfSk7XG5cbiAgICBzZXRQb3N0cyhwcmV2ID0+IFtyZXMuZGF0YSwgLi4ucHJldl0pO1xuICAgIHNldE5ld1Bvc3QoeyB0ZXh0OiBcIlwiLCBsb2NhdGlvbjogXCJcIiB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcbiAgICBzZXRFcnJvcihlcnJvck1zZyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0ID0gYXN5bmMgKHBvc3RJZCwgc2V0UG9zdHMsIHNldFNob3dUb2FzdHIpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBBeGlvcy5kZWxldGUoYC8ke3Bvc3RJZH1gKTtcbiAgICBzZXRQb3N0cyhwcmV2ID0+IHByZXYuZmlsdGVyKHBvc3QgPT4gcG9zdC5faWQgIT09IHBvc3RJZCkpO1xuICAgIHNldFNob3dUb2FzdHIodHJ1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoY2F0Y2hFcnJvcnMoZXJyb3IpKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxpa2VQb3N0ID0gYXN5bmMgKHBvc3RJZCwgdXNlcklkLCBzZXRMaWtlcywgbGlrZSA9IHRydWUpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAobGlrZSkge1xuICAgICAgYXdhaXQgQXhpb3MucG9zdChgL2xpa2UvJHtwb3N0SWR9YCk7XG4gICAgICBzZXRMaWtlcyhwcmV2ID0+IFsuLi5wcmV2LCB7IHVzZXI6IHVzZXJJZCB9XSk7XG4gICAgfVxuICAgIC8vXG4gICAgZWxzZSBpZiAoIWxpa2UpIHtcbiAgICAgIGF3YWl0IEF4aW9zLnB1dChgL3VubGlrZS8ke3Bvc3RJZH1gKTtcbiAgICAgIHNldExpa2VzKHByZXYgPT4gcHJldi5maWx0ZXIobGlrZSA9PiBsaWtlLnVzZXIgIT09IHVzZXJJZCkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChjYXRjaEVycm9ycyhlcnJvcikpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAocG9zdElkLCB1c2VyLCB0ZXh0LCBzZXRDb21tZW50cywgc2V0VGV4dCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLnBvc3QoYC9jb21tZW50LyR7cG9zdElkfWAsIHsgdGV4dCB9KTtcblxuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XG4gICAgICBfaWQ6IHJlcy5kYXRhLFxuICAgICAgdXNlcixcbiAgICAgIHRleHQsXG4gICAgICBkYXRlOiBEYXRlLm5vdygpXG4gICAgfTtcblxuICAgIHNldENvbW1lbnRzKHByZXYgPT4gW25ld0NvbW1lbnQsIC4uLnByZXZdKTtcbiAgICBzZXRUZXh0KFwiXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb21tZW50ID0gYXN5bmMgKHBvc3RJZCwgY29tbWVudElkLCBzZXRDb21tZW50cykgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IEF4aW9zLmRlbGV0ZShgLyR7cG9zdElkfS8ke2NvbW1lbnRJZH1gKTtcbiAgICBzZXRDb21tZW50cyhwcmV2ID0+IHByZXYuZmlsdGVyKGNvbW1lbnQgPT4gY29tbWVudC5faWQgIT09IGNvbW1lbnRJZCkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHVwbG9hZFBpYyA9IGFzeW5jIG1lZGlhID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIG1lZGlhKTtcbiAgICBmb3JtLmFwcGVuZChcInVwbG9hZF9wcmVzZXRcIiwgXCJzb2NpYWxfbWVkaWFfYXBwXCIpO1xuICAgIGZvcm0uYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBcImluZGVyc2luZ2hcIik7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkNMT1VESU5BUllfVVJMLCBmb3JtKTtcbiAgICByZXR1cm4gcmVzLmRhdGEudXJsO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkUGljO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3JvcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=