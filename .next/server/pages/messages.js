(function() {
var exports = {};
exports.id = "pages/messages";
exports.ids = ["pages/messages"];
exports.modules = {

/***/ "./components/Chats/Chat.js":
/*!**********************************!*\
  !*** ./components/Chats/Chat.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Chats\\Chat.js";





function Chat({
  chat,
  connectedUsers,
  deleteChat
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const isOnline = connectedUsers.length > 0 && connectedUsers.filter(user => user.userId === chat.messagesWith).length > 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
      selection: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
        active: router.query.message === chat.messagesWith,
        onClick: () => router.push(`/messages?message=${chat.messagesWith}`, undefined, {
          shallow: true
        }),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Avatar, {
            src: chat.profilePicUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Content, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Author, {
              as: "a",
              children: [chat.name, " ", isOnline && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                name: "circle",
                size: "small",
                color: "green"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 30
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Metadata, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_4__.default)(chat.date)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  position: "absolute",
                  right: "10px",
                  cursor: "pointer"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                  name: "trash alternate",
                  color: "red",
                  onClick: () => deleteChat(chat.messagesWith)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Text, {
              children: chat.lastMessage.length > 20 ? `${chat.lastMessage.substring(0, 20)} ...` : chat.lastMessage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./components/Chats/ChatListSearch.js":
/*!********************************************!*\
  !*** ./components/Chats/ChatListSearch.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Chats\\ChatListSearch.js";






let cancel;

function ChatListSearch({
  chats,
  setChats
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const handleChange = async e => {
    const {
      value
    } = e.target;
    setText(value);
    if (value.length === 0) return;
    if (value.trim().length === 0) return;
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_3___default().CancelToken);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get("token");
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6___default())}/api/search/${value}`, {
        headers: {
          Authorization: token
        },
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });

      if (res.data.length === 0) {
        results.length > 0 && setResults([]);
        return setLoading(false);
      }

      setResults(res.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const addChat = result => {
    const alreadyInChat = chats.length > 0 && chats.filter(chat => chat.messagesWith === result._id).length > 0;

    if (alreadyInChat) {
      return router.push(`/messages?message=${result._id}`);
    } //
    else {
        const newChat = {
          messagesWith: result._id,
          name: result.name,
          profilePicUrl: result.profilePicUrl,
          lastMessage: "",
          date: Date.now()
        };
        setChats(prev => [newChat, ...prev]);
        return router.push(`/messages?message=${result._id}`);
      }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (text.length === 0 && loading) setLoading(false);
  }, [text]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Search, {
    onBlur: () => {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText("");
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => addChat(data.result)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, this);
}

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Item, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
        src: profilePicUrl,
        alt: "ProfilePic",
        avatar: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.List.Content, {
        header: name,
        as: "a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, undefined)
  }, _id, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ChatListSearch);

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

/***/ "./components/Messages/Banner.js":
/*!***************************************!*\
  !*** ./components/Messages/Banner.js ***!
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

var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Messages\\Banner.js";



function Banner({
  bannerData
}) {
  const {
    name,
    profilePicUrl
  } = bannerData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    color: "teal",
    attached: "top",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
        floated: "left",
        width: 14,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
            avatar: true,
            src: profilePicUrl
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, this), name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Messages/Message.js":
/*!****************************************!*\
  !*** ./components/Messages/Message.js ***!
  \****************************************/
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

var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Messages\\Message.js";




function Message({
  message,
  user,
  deleteMsg,
  bannerProfilePic,
  divRef
}) {
  const {
    0: deleteIcon,
    1: showDeleteIcon
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const ifYouSender = message.sender === user._id;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bubbleWrapper",
    ref: divRef,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: ifYouSender ? "inlineContainer own" : "inlineContainer",
      onClick: () => ifYouSender && showDeleteIcon(!deleteIcon),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "inlineIcon",
        src: ifYouSender ? user.profilePicUrl : bannerProfilePic
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: ifYouSender ? "ownBubble own" : "otherBubble other",
        children: message.msg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), deleteIcon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Popup, {
        trigger: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "trash",
          color: "red",
          style: {
            cursor: "pointer"
          },
          onClick: () => deleteMsg(message._id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }, this),
        content: "This will only delete the message from your inbox!",
        position: "top right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: ifYouSender ? "own" : "other",
      children: (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_3__.default)(message.date)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Message);

/***/ }),

/***/ "./components/Messages/MessageInputField.js":
/*!**************************************************!*\
  !*** ./components/Messages/MessageInputField.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\components\\Messages\\MessageInputField.js";



function MessageInputField({
  sendMsg
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      position: "sticky",
      bottom: "0"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
      secondary: true,
      color: "teal",
      attached: "bottom",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
        reply: true,
        onSubmit: e => {
          e.preventDefault();
          sendMsg(text);
          setText("");
        },
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
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MessageInputField);

/***/ }),

/***/ "./pages/messages.js":
/*!***************************!*\
  !*** ./pages/messages.js ***!
  \***************************/
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
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Chats_Chat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Chats/Chat */ "./components/Chats/Chat.js");
/* harmony import */ var _components_Chats_ChatListSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Chats/ChatListSearch */ "./components/Chats/ChatListSearch.js");
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Messages_Banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Messages/Banner */ "./components/Messages/Banner.js");
/* harmony import */ var _components_Messages_MessageInputField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Messages/MessageInputField */ "./components/Messages/MessageInputField.js");
/* harmony import */ var _components_Messages_Message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Messages/Message */ "./components/Messages/Message.js");
/* harmony import */ var _utils_getUserInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/getUserInfo */ "./utils/getUserInfo.js");
/* harmony import */ var _utils_newMsgSound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/newMsgSound */ "./utils/newMsgSound.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_16__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\Check-main\\Check-main\\pages\\messages.js";

















const scrollDivToBottom = divRef => divRef.current !== null && divRef.current.scrollIntoView({
  behaviour: "smooth"
});

function Messages({
  chatsData,
  user
}) {
  const {
    0: chats,
    1: setChats
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(chatsData || []);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: connectedUsers,
    1: setConnectedUsers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: messages,
    1: setMessages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: bannerData,
    1: setBannerData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: "",
    profilePicUrl: ""
  });
  const divRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // This ref is for persisting the state of query string in url throughout re-renders. This ref is the value of query string inside url

  const openChatId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(""); //CONNECTION useEffect

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!socket.current) {
      socket.current = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()((_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default()));
    }

    if (socket.current) {
      socket.current.emit("join", {
        userId: user._id
      });
      socket.current.on("connectedUsers", ({
        users
      }) => {
        users.length > 0 && setConnectedUsers(users);
      });

      if (chats.length > 0 && !router.query.message) {
        router.push(`/messages?message=${chats[0].messagesWith}`, undefined, {
          shallow: true
        });
      }
    }
  }, []); // LOAD MESSAGES useEffect

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const loadMessages = () => {
      socket.current.emit("loadMessages", {
        userId: user._id,
        messagesWith: router.query.message
      });
      socket.current.on("messagesLoaded", async ({
        chat
      }) => {
        setMessages(chat.messages);
        setBannerData({
          name: chat.messagesWith.name,
          profilePicUrl: chat.messagesWith.profilePicUrl
        });
        openChatId.current = chat.messagesWith._id;
        divRef.current && scrollDivToBottom(divRef);
      });
      socket.current.on("noChatFound", async () => {
        const {
          name,
          profilePicUrl
        } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_14__.default)(router.query.message);
        setBannerData({
          name,
          profilePicUrl
        });
        setMessages([]);
        openChatId.current = router.query.message;
      });
    };

    if (socket.current && router.query.message) loadMessages();
  }, [router.query.message]);

  const sendMsg = msg => {
    if (socket.current) {
      socket.current.emit("sendNewMsg", {
        userId: user._id,
        msgSendToUserId: openChatId.current,
        msg
      });
    }
  }; // Confirming msg is sent and receving the messages useEffect


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (socket.current) {
      socket.current.on("msgSent", ({
        newMsg
      }) => {
        if (newMsg.receiver === openChatId.current) {
          setMessages(prev => [...prev, newMsg]);
          setChats(prev => {
            const previousChat = prev.find(chat => chat.messagesWith === newMsg.receiver);
            previousChat.lastMessage = newMsg.msg;
            previousChat.date = newMsg.date;
            return [...prev];
          });
        }
      });
      socket.current.on("newMsgReceived", async ({
        newMsg
      }) => {
        let senderName; // WHEN CHAT WITH SENDER IS CURRENTLY OPENED INSIDE YOUR BROWSER

        if (newMsg.sender === openChatId.current) {
          setMessages(prev => [...prev, newMsg]);
          setChats(prev => {
            const previousChat = prev.find(chat => chat.messagesWith === newMsg.sender);
            previousChat.lastMessage = newMsg.msg;
            previousChat.date = newMsg.date;
            senderName = previousChat.name;
            return [...prev];
          });
        } //
        else {
            const ifPreviouslyMessaged = chats.filter(chat => chat.messagesWith === newMsg.sender).length > 0;

            if (ifPreviouslyMessaged) {
              setChats(prev => {
                const previousChat = prev.find(chat => chat.messagesWith === newMsg.sender);
                previousChat.lastMessage = newMsg.msg;
                previousChat.date = newMsg.date;
                senderName = previousChat.name;
                return [previousChat, ...prev.filter(chat => chat.messagesWith !== newMsg.sender)];
              });
            } //IF NO PREVIOUS CHAT WITH THE SENDER
            else {
                const {
                  name,
                  profilePicUrl
                } = await (0,_utils_getUserInfo__WEBPACK_IMPORTED_MODULE_14__.default)(newMsg.sender);
                senderName = name;
                const newChat = {
                  messagesWith: newMsg.sender,
                  name,
                  profilePicUrl,
                  lastMessage: newMsg.msg,
                  date: newMsg.date
                };
                setChats(prev => [newChat, ...prev]);
              }
          }

        (0,_utils_newMsgSound__WEBPACK_IMPORTED_MODULE_15__.default)(senderName);
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    messages.length > 0 && scrollDivToBottom(divRef);
  }, [messages]);

  const deleteMsg = messageId => {
    if (socket.current) {
      socket.current.emit("deleteMsg", {
        userId: user._id,
        messagesWith: openChatId.current,
        messageId
      });
      socket.current.on("msgDeleted", () => {
        setMessages(prev => prev.filter(message => message._id !== messageId));
      });
    }
  };

  const deleteChat = async messagesWith => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_3___default().delete(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/chats/${messagesWith}`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_16___default().get("token")
        }
      });
      setChats(prev => prev.filter(chat => chat.messagesWith !== messagesWith));
      router.push("/messages", undefined, {
        shallow: true
      });
    } catch (error) {
      alert("Error deleting chat");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {
      padded: true,
      basic: true,
      size: "large",
      style: {
        marginTop: "5px"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Header, {
        icon: "home",
        content: "Go Back!",
        onClick: () => router.push("/"),
        style: {
          cursor: "pointer"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          marginBottom: "10px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chats_ChatListSearch__WEBPACK_IMPORTED_MODULE_9__.default, {
          chats: chats,
          setChats: setChats
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }, this), chats.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {
          stackable: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {
            width: 4,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Comment.Group, {
              size: "big",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {
                raised: true,
                style: {
                  overflow: "auto",
                  maxHeight: "32rem"
                },
                children: chats.map((chat, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chats_Chat__WEBPACK_IMPORTED_MODULE_8__.default, {
                  chat: chat,
                  connectedUsers: connectedUsers,
                  deleteChat: deleteChat
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 233,
                  columnNumber: 23
                }, this))
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {
            width: 12,
            children: router.query.message && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  overflow: "auto",
                  overflowX: "hidden",
                  maxHeight: "35rem",
                  height: "35rem",
                  backgroundColor: "whitesmoke"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  style: {
                    position: "sticky",
                    top: "0"
                  },
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Messages_Banner__WEBPACK_IMPORTED_MODULE_11__.default, {
                    bannerData: bannerData
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 23
                }, this), messages.length > 0 && messages.map((message, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Messages_Message__WEBPACK_IMPORTED_MODULE_13__.default, {
                  divRef: divRef,
                  bannerProfilePic: bannerData.profilePicUrl,
                  message: message,
                  user: user,
                  deleteMsg: deleteMsg
                }, i, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 27
                }, this))]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Messages_MessageInputField__WEBPACK_IMPORTED_MODULE_12__.default, {
                sendMsg: sendMsg
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 273,
                columnNumber: 21
              }, this)]
            }, void 0, true)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }, this)
      }, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_10__.NoMessages, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

Messages.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4___default())}/api/chats`, {
      headers: {
        Authorization: token
      }
    });
    return {
      chatsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Messages);

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/messages.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NoYXRzL0NoYXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9DaGF0cy9DaGF0TGlzdFNlYXJjaC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9NZXNzYWdlcy9CYW5uZXIuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZUlucHV0RmllbGQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vcGFnZXMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvYmFzZVVybC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9jYWxjdWxhdGVUaW1lLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2dldFVzZXJJbmZvLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL25ld01zZ1NvdW5kLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNvY2tldC5pby1jbGllbnRcIiJdLCJuYW1lcyI6WyJDaGF0IiwiY2hhdCIsImNvbm5lY3RlZFVzZXJzIiwiZGVsZXRlQ2hhdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlzT25saW5lIiwibGVuZ3RoIiwiZmlsdGVyIiwidXNlciIsInVzZXJJZCIsIm1lc3NhZ2VzV2l0aCIsInF1ZXJ5IiwibWVzc2FnZSIsInB1c2giLCJ1bmRlZmluZWQiLCJzaGFsbG93IiwicHJvZmlsZVBpY1VybCIsIm5hbWUiLCJjYWxjdWxhdGVUaW1lIiwiZGF0ZSIsInBvc2l0aW9uIiwicmlnaHQiLCJjdXJzb3IiLCJsYXN0TWVzc2FnZSIsInN1YnN0cmluZyIsImNhbmNlbCIsIkNoYXRMaXN0U2VhcmNoIiwiY2hhdHMiLCJzZXRDaGF0cyIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidHJpbSIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJ0b2tlbiIsImNvb2tpZSIsInJlcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiYWRkQ2hhdCIsInJlc3VsdCIsImFscmVhZHlJbkNoYXQiLCJfaWQiLCJuZXdDaGF0IiwiRGF0ZSIsIm5vdyIsInByZXYiLCJ1c2VFZmZlY3QiLCJSZXN1bHRSZW5kZXJlciIsIk5vUHJvZmlsZVBvc3RzIiwiTm9Gb2xsb3dEYXRhIiwiZm9sbG93ZXJzQ29tcG9uZW50IiwiZm9sbG93aW5nQ29tcG9uZW50IiwiTm9NZXNzYWdlcyIsIk5vUG9zdHMiLCJOb1Byb2ZpbGUiLCJOb05vdGlmaWNhdGlvbnMiLCJOb1Bvc3RGb3VuZCIsIkJhbm5lciIsImJhbm5lckRhdGEiLCJNZXNzYWdlIiwiZGVsZXRlTXNnIiwiYmFubmVyUHJvZmlsZVBpYyIsImRpdlJlZiIsImRlbGV0ZUljb24iLCJzaG93RGVsZXRlSWNvbiIsImlmWW91U2VuZGVyIiwic2VuZGVyIiwibXNnIiwiTWVzc2FnZUlucHV0RmllbGQiLCJzZW5kTXNnIiwiYm90dG9tIiwicHJldmVudERlZmF1bHQiLCJjb2xvciIsImljb24iLCJkaXNhYmxlZCIsInNjcm9sbERpdlRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3VyIiwiTWVzc2FnZXMiLCJjaGF0c0RhdGEiLCJzb2NrZXQiLCJ1c2VSZWYiLCJzZXRDb25uZWN0ZWRVc2VycyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJzZXRCYW5uZXJEYXRhIiwib3BlbkNoYXRJZCIsImlvIiwiZW1pdCIsIm9uIiwidXNlcnMiLCJsb2FkTWVzc2FnZXMiLCJnZXRVc2VySW5mbyIsIm1zZ1NlbmRUb1VzZXJJZCIsIm5ld01zZyIsInJlY2VpdmVyIiwicHJldmlvdXNDaGF0IiwiZmluZCIsInNlbmRlck5hbWUiLCJpZlByZXZpb3VzbHlNZXNzYWdlZCIsIm5ld01zZ1NvdW5kIiwibWVzc2FnZUlkIiwiYWxlcnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJvdmVyZmxvdyIsIm1heEhlaWdodCIsIm1hcCIsImkiLCJvdmVyZmxvd1giLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b3AiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJwYXJzZUNvb2tpZXMiLCJlcnJvckxvYWRpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlZEF0IiwidG9kYXkiLCJtb21lbnQiLCJwb3N0RGF0ZSIsImRpZmZJbkhvdXJzIiwiZGlmZiIsInVzZXJUb0ZpbmRJZCIsInNvdW5kIiwiQXVkaW8iLCJwbGF5IiwiZG9jdW1lbnQiLCJ0aXRsZSIsInZpc2liaWxpdHlTdGF0ZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFjO0FBQUVDLE1BQUY7QUFBUUMsZ0JBQVI7QUFBd0JDO0FBQXhCLENBQWQsRUFBb0Q7QUFDbEQsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU1DLFFBQVEsR0FDWkosY0FBYyxDQUFDSyxNQUFmLEdBQXdCLENBQXhCLElBQ0FMLGNBQWMsQ0FBQ00sTUFBZixDQUFzQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLE1BQUwsS0FBZ0JULElBQUksQ0FBQ1UsWUFBbkQsRUFBaUVKLE1BQWpFLEdBQTBFLENBRjVFO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDZCQUNFLDhEQUFDLHdEQUFEO0FBQ0UsY0FBTSxFQUFFSCxNQUFNLENBQUNRLEtBQVAsQ0FBYUMsT0FBYixLQUF5QlosSUFBSSxDQUFDVSxZQUR4QztBQUVFLGVBQU8sRUFBRSxNQUNQUCxNQUFNLENBQUNVLElBQVAsQ0FBYSxxQkFBb0JiLElBQUksQ0FBQ1UsWUFBYSxFQUFuRCxFQUFzREksU0FBdEQsRUFBaUU7QUFDL0RDLGlCQUFPLEVBQUU7QUFEc0QsU0FBakUsQ0FISjtBQUFBLCtCQVFFLDhEQUFDLHNEQUFEO0FBQUEsa0NBQ0UsOERBQUMsNkRBQUQ7QUFBZ0IsZUFBRyxFQUFF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Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL21lc3NhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGl2aWRlciwgQ29tbWVudCwgSWNvbiwgTGlzdCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xuXG5mdW5jdGlvbiBDaGF0KHsgY2hhdCwgY29ubmVjdGVkVXNlcnMsIGRlbGV0ZUNoYXQgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBpc09ubGluZSA9XG4gICAgY29ubmVjdGVkVXNlcnMubGVuZ3RoID4gMCAmJlxuICAgIGNvbm5lY3RlZFVzZXJzLmZpbHRlcih1c2VyID0+IHVzZXIudXNlcklkID09PSBjaGF0Lm1lc3NhZ2VzV2l0aCkubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGlzdCBzZWxlY3Rpb24+XG4gICAgICAgIDxMaXN0Lkl0ZW1cbiAgICAgICAgICBhY3RpdmU9e3JvdXRlci5xdWVyeS5tZXNzYWdlID09PSBjaGF0Lm1lc3NhZ2VzV2l0aH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7Y2hhdC5tZXNzYWdlc1dpdGh9YCwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgICAgIHNoYWxsb3c6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPENvbW1lbnQ+XG4gICAgICAgICAgICA8Q29tbWVudC5BdmF0YXIgc3JjPXtjaGF0LnByb2ZpbGVQaWNVcmx9IC8+XG4gICAgICAgICAgICA8Q29tbWVudC5Db250ZW50PlxuICAgICAgICAgICAgICA8Q29tbWVudC5BdXRob3IgYXM9XCJhXCI+XG4gICAgICAgICAgICAgICAge2NoYXQubmFtZX17XCIgXCJ9XG4gICAgICAgICAgICAgICAge2lzT25saW5lICYmIDxJY29uIG5hbWU9XCJjaXJjbGVcIiBzaXplPVwic21hbGxcIiBjb2xvcj1cImdyZWVuXCIgLz59XG4gICAgICAgICAgICAgIDwvQ29tbWVudC5BdXRob3I+XG5cbiAgICAgICAgICAgICAgPENvbW1lbnQuTWV0YWRhdGE+XG4gICAgICAgICAgICAgICAgPGRpdj57Y2FsY3VsYXRlVGltZShjaGF0LmRhdGUpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgcmlnaHQ6IFwiMTBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyYXNoIGFsdGVybmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQ2hhdChjaGF0Lm1lc3NhZ2VzV2l0aCl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbW1lbnQuTWV0YWRhdGE+XG5cbiAgICAgICAgICAgICAgPENvbW1lbnQuVGV4dD5cbiAgICAgICAgICAgICAgICB7Y2hhdC5sYXN0TWVzc2FnZS5sZW5ndGggPiAyMFxuICAgICAgICAgICAgICAgICAgPyBgJHtjaGF0Lmxhc3RNZXNzYWdlLnN1YnN0cmluZygwLCAyMCl9IC4uLmBcbiAgICAgICAgICAgICAgICAgIDogY2hhdC5sYXN0TWVzc2FnZX1cbiAgICAgICAgICAgICAgPC9Db21tZW50LlRleHQ+XG4gICAgICAgICAgICA8L0NvbW1lbnQuQ29udGVudD5cbiAgICAgICAgICA8L0NvbW1lbnQ+XG4gICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgPC9MaXN0PlxuICAgICAgPERpdmlkZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaXN0LCBJbWFnZSwgU2VhcmNoIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcbmxldCBjYW5jZWw7XG5cbmZ1bmN0aW9uIENoYXRMaXN0U2VhcmNoKHsgY2hhdHMsIHNldENoYXRzIH0pIHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyBlID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRUZXh0KHZhbHVlKTtcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgaWYgKHZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY2FuY2VsICYmIGNhbmNlbCgpO1xuICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NlYXJjaC8ke3ZhbHVlfWAsIHtcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxuICAgICAgICBjYW5jZWxUb2tlbjogbmV3IENhbmNlbFRva2VuKGNhbmNlbGVyID0+IHtcbiAgICAgICAgICBjYW5jZWwgPSBjYW5jZWxlcjtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlc3VsdHMubGVuZ3RoID4gMCAmJiBzZXRSZXN1bHRzKFtdKTtcblxuICAgICAgICByZXR1cm4gc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHNldFJlc3VsdHMocmVzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkQ2hhdCA9IHJlc3VsdCA9PiB7XG4gICAgY29uc3QgYWxyZWFkeUluQ2hhdCA9XG4gICAgICBjaGF0cy5sZW5ndGggPiAwICYmXG4gICAgICBjaGF0cy5maWx0ZXIoY2hhdCA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCA9PT0gcmVzdWx0Ll9pZCkubGVuZ3RoID4gMDtcblxuICAgIGlmIChhbHJlYWR5SW5DaGF0KSB7XG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7cmVzdWx0Ll9pZH1gKTtcbiAgICB9XG4gICAgLy9cbiAgICBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0NoYXQgPSB7XG4gICAgICAgIG1lc3NhZ2VzV2l0aDogcmVzdWx0Ll9pZCxcbiAgICAgICAgbmFtZTogcmVzdWx0Lm5hbWUsXG4gICAgICAgIHByb2ZpbGVQaWNVcmw6IHJlc3VsdC5wcm9maWxlUGljVXJsLFxuICAgICAgICBsYXN0TWVzc2FnZTogXCJcIixcbiAgICAgICAgZGF0ZTogRGF0ZS5ub3coKVxuICAgICAgfTtcblxuICAgICAgc2V0Q2hhdHMocHJldiA9PiBbbmV3Q2hhdCwgLi4ucHJldl0pO1xuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goYC9tZXNzYWdlcz9tZXNzYWdlPSR7cmVzdWx0Ll9pZH1gKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodGV4dC5sZW5ndGggPT09IDAgJiYgbG9hZGluZykgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFt0ZXh0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VhcmNoXG4gICAgICBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgcmVzdWx0cy5sZW5ndGggPiAwICYmIHNldFJlc3VsdHMoW10pO1xuICAgICAgICBsb2FkaW5nICYmIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRUZXh0KFwiXCIpO1xuICAgICAgfX1cbiAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICB2YWx1ZT17dGV4dH1cbiAgICAgIHJlc3VsdFJlbmRlcmVyPXtSZXN1bHRSZW5kZXJlcn1cbiAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XG4gICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgbWluQ2hhcmFjdGVycz17MX1cbiAgICAgIG9uUmVzdWx0U2VsZWN0PXsoZSwgZGF0YSkgPT4gYWRkQ2hhdChkYXRhLnJlc3VsdCl9XG4gICAgLz5cbiAgKTtcbn1cblxuY29uc3QgUmVzdWx0UmVuZGVyZXIgPSAoeyBfaWQsIHByb2ZpbGVQaWNVcmwsIG5hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaXN0IGtleT17X2lkfT5cbiAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgIDxJbWFnZSBzcmM9e3Byb2ZpbGVQaWNVcmx9IGFsdD1cIlByb2ZpbGVQaWNcIiBhdmF0YXIgLz5cbiAgICAgICAgPExpc3QuQ29udGVudCBoZWFkZXI9e25hbWV9IGFzPVwiYVwiIC8+XG4gICAgICA8L0xpc3QuSXRlbT5cbiAgICA8L0xpc3Q+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0TGlzdFNlYXJjaDtcbiIsImltcG9ydCB7IE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlUG9zdHMgPSAoKSA9PiAoXG4gIDw+XG4gICAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiU29ycnlcIiBjb250ZW50PVwiVXNlciBoYXMgbm90IHBvc3RlZCBhbnl0aGluZyB5ZXQhXCIgLz5cbiAgICA8QnV0dG9uIGljb249XCJsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0XCIgY29udGVudD1cIkdvIEJhY2tcIiBhcz1cImFcIiBocmVmPVwiL1wiIC8+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vRm9sbG93RGF0YSA9ICh7IGZvbGxvd2Vyc0NvbXBvbmVudCwgZm9sbG93aW5nQ29tcG9uZW50IH0pID0+IChcbiAgPD5cbiAgICB7Zm9sbG93ZXJzQ29tcG9uZW50ICYmIChcbiAgICAgIDxNZXNzYWdlIGljb249XCJ1c2VyIG91dGxpbmVcIiBpbmZvIGNvbnRlbnQ9e2BVc2VyIGRvZXMgbm90IGhhdmUgZm9sbG93ZXJzYH0gLz5cbiAgICApfVxuXG4gICAge2ZvbGxvd2luZ0NvbXBvbmVudCAmJiAoXG4gICAgICA8TWVzc2FnZSBpY29uPVwidXNlciBvdXRsaW5lXCIgaW5mbyBjb250ZW50PXtgVXNlciBkb2VzIG5vdCBmb2xsb3cgYW55IHVzZXJzYH0gLz5cbiAgICApfVxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBOb01lc3NhZ2VzID0gKCkgPT4gKFxuICA8TWVzc2FnZVxuICAgIGluZm9cbiAgICBpY29uPVwidGVsZWdyYW0gcGxhbmVcIlxuICAgIGhlYWRlcj1cIlNvcnJ5XCJcbiAgICBjb250ZW50PVwiWW91IGhhdmUgbm90IG1lc3NhZ2VkIGFueW9uZSB5ZXQuU2VhcmNoIGFib3ZlIHRvIG1lc3NhZ2Ugc29tZW9uZSFcIlxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vUG9zdHMgPSAoKSA9PiAoXG4gIDxNZXNzYWdlXG4gICAgaW5mb1xuICAgIGljb249XCJtZWhcIlxuICAgIGhlYWRlcj1cIkhleSFcIlxuICAgIGNvbnRlbnQ9XCJObyBQb3N0cy4gTWFrZSBzdXJlIHlvdSBoYXZlIGZvbGxvd2VkIHNvbWVvbmUuXCJcbiAgLz5cbik7XG5cbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGUgPSAoKSA9PiAoXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUHJvZmlsZSBGb3VuZC5cIiAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE5vTm90aWZpY2F0aW9ucyA9ICgpID0+IChcbiAgPE1lc3NhZ2UgY29udGVudD1cIk5vIE5vdGlmaWNhdGlvbnNcIiBpY29uPVwic21pbGVcIiBpbmZvIC8+XG4pO1xuXG5leHBvcnQgY29uc3QgTm9Qb3N0Rm91bmQgPSAoKSA9PiAoXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUG9zdCBGb3VuZC5cIiAvPlxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlZ21lbnQsIEdyaWQsIEltYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmZ1bmN0aW9uIEJhbm5lcih7IGJhbm5lckRhdGEgfSkge1xuICBjb25zdCB7IG5hbWUsIHByb2ZpbGVQaWNVcmwgfSA9IGJhbm5lckRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VnbWVudCBjb2xvcj1cInRlYWxcIiBhdHRhY2hlZD1cInRvcFwiPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXsxNH0+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgPEltYWdlIGF2YXRhciBzcmM9e3Byb2ZpbGVQaWNVcmx9IC8+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgPC9HcmlkPlxuICAgIDwvU2VnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJY29uLCBQb3B1cCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcblxuZnVuY3Rpb24gTWVzc2FnZSh7IG1lc3NhZ2UsIHVzZXIsIGRlbGV0ZU1zZywgYmFubmVyUHJvZmlsZVBpYywgZGl2UmVmIH0pIHtcbiAgY29uc3QgW2RlbGV0ZUljb24sIHNob3dEZWxldGVJY29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBpZllvdVNlbmRlciA9IG1lc3NhZ2Uuc2VuZGVyID09PSB1c2VyLl9pZDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlV3JhcHBlclwiIHJlZj17ZGl2UmVmfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtpZllvdVNlbmRlciA/IFwiaW5saW5lQ29udGFpbmVyIG93blwiIDogXCJpbmxpbmVDb250YWluZXJcIn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gaWZZb3VTZW5kZXIgJiYgc2hvd0RlbGV0ZUljb24oIWRlbGV0ZUljb24pfVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lSWNvblwiXG4gICAgICAgICAgc3JjPXtpZllvdVNlbmRlciA/IHVzZXIucHJvZmlsZVBpY1VybCA6IGJhbm5lclByb2ZpbGVQaWN9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lmWW91U2VuZGVyID8gXCJvd25CdWJibGUgb3duXCIgOiBcIm90aGVyQnViYmxlIG90aGVyXCJ9PlxuICAgICAgICAgIHttZXNzYWdlLm1zZ31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2RlbGV0ZUljb24gJiYgKFxuICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgdHJpZ2dlcj17XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgbmFtZT1cInRyYXNoXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU1zZyhtZXNzYWdlLl9pZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZW50PVwiVGhpcyB3aWxsIG9ubHkgZGVsZXRlIHRoZSBtZXNzYWdlIGZyb20geW91ciBpbmJveCFcIlxuICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AgcmlnaHRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpZllvdVNlbmRlciA/IFwib3duXCIgOiBcIm90aGVyXCJ9PntjYWxjdWxhdGVUaW1lKG1lc3NhZ2UuZGF0ZSl9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBTZWdtZW50IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmZ1bmN0aW9uIE1lc3NhZ2VJbnB1dEZpZWxkKHsgc2VuZE1zZyB9KSB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInN0aWNreVwiLCBib3R0b206IFwiMFwiIH19PlxuICAgICAgPFNlZ21lbnQgc2Vjb25kYXJ5IGNvbG9yPVwidGVhbFwiIGF0dGFjaGVkPVwiYm90dG9tXCI+XG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgcmVwbHlcbiAgICAgICAgICBvblN1Ym1pdD17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZW5kTXNnKHRleHQpO1xuICAgICAgICAgICAgc2V0VGV4dChcIlwiKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmQgTmV3IE1lc3NhZ2VcIlxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgICAgICAgICAgIGljb246IFwidGVsZWdyYW0gcGxhbmVcIixcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRleHQgPT09IFwiXCIsXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmdcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9TZWdtZW50PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlSW5wdXRGaWVsZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFNlZ21lbnQsIEhlYWRlciwgRGl2aWRlciwgQ29tbWVudCwgR3JpZCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhdHMvQ2hhdFwiO1xuaW1wb3J0IENoYXRMaXN0U2VhcmNoIGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXRzL0NoYXRMaXN0U2VhcmNoXCI7XG5pbXBvcnQgeyBOb01lc3NhZ2VzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05vRGF0YVwiO1xuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXNzYWdlcy9CYW5uZXJcIjtcbmltcG9ydCBNZXNzYWdlSW5wdXRGaWVsZCBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlSW5wdXRGaWVsZFwiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWVzc2FnZXMvTWVzc2FnZVwiO1xuaW1wb3J0IGdldFVzZXJJbmZvIGZyb20gXCIuLi91dGlscy9nZXRVc2VySW5mb1wiO1xuaW1wb3J0IG5ld01zZ1NvdW5kIGZyb20gXCIuLi91dGlscy9uZXdNc2dTb3VuZFwiO1xuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5cbmNvbnN0IHNjcm9sbERpdlRvQm90dG9tID0gZGl2UmVmID0+XG4gIGRpdlJlZi5jdXJyZW50ICE9PSBudWxsICYmIGRpdlJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3VyOiBcInNtb290aFwiIH0pO1xuXG5mdW5jdGlvbiBNZXNzYWdlcyh7IGNoYXRzRGF0YSwgdXNlciB9KSB7XG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGUoY2hhdHNEYXRhIHx8IFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtjb25uZWN0ZWRVc2Vycywgc2V0Q29ubmVjdGVkVXNlcnNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYmFubmVyRGF0YSwgc2V0QmFubmVyRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIHByb2ZpbGVQaWNVcmw6IFwiXCIgfSk7XG5cbiAgY29uc3QgZGl2UmVmID0gdXNlUmVmKCk7XG5cbiAgLy8gVGhpcyByZWYgaXMgZm9yIHBlcnNpc3RpbmcgdGhlIHN0YXRlIG9mIHF1ZXJ5IHN0cmluZyBpbiB1cmwgdGhyb3VnaG91dCByZS1yZW5kZXJzLiBUaGlzIHJlZiBpcyB0aGUgdmFsdWUgb2YgcXVlcnkgc3RyaW5nIGluc2lkZSB1cmxcbiAgY29uc3Qgb3BlbkNoYXRJZCA9IHVzZVJlZihcIlwiKTtcblxuICAvL0NPTk5FQ1RJT04gdXNlRWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzb2NrZXQuY3VycmVudCkge1xuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhiYXNlVXJsKTtcbiAgICB9XG5cbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJqb2luXCIsIHsgdXNlcklkOiB1c2VyLl9pZCB9KTtcblxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJjb25uZWN0ZWRVc2Vyc1wiLCAoeyB1c2VycyB9KSA9PiB7XG4gICAgICAgIHVzZXJzLmxlbmd0aCA+IDAgJiYgc2V0Q29ubmVjdGVkVXNlcnModXNlcnMpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChjaGF0cy5sZW5ndGggPiAwICYmICFyb3V0ZXIucXVlcnkubWVzc2FnZSkge1xuICAgICAgICByb3V0ZXIucHVzaChgL21lc3NhZ2VzP21lc3NhZ2U9JHtjaGF0c1swXS5tZXNzYWdlc1dpdGh9YCwgdW5kZWZpbmVkLCB7XG4gICAgICAgICAgc2hhbGxvdzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBMT0FEIE1FU1NBR0VTIHVzZUVmZmVjdFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRNZXNzYWdlcyA9ICgpID0+IHtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJsb2FkTWVzc2FnZXNcIiwge1xuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgICAgICBtZXNzYWdlc1dpdGg6IHJvdXRlci5xdWVyeS5tZXNzYWdlXG4gICAgICB9KTtcblxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJtZXNzYWdlc0xvYWRlZFwiLCBhc3luYyAoeyBjaGF0IH0pID0+IHtcbiAgICAgICAgc2V0TWVzc2FnZXMoY2hhdC5tZXNzYWdlcyk7XG4gICAgICAgIHNldEJhbm5lckRhdGEoe1xuICAgICAgICAgIG5hbWU6IGNoYXQubWVzc2FnZXNXaXRoLm5hbWUsXG4gICAgICAgICAgcHJvZmlsZVBpY1VybDogY2hhdC5tZXNzYWdlc1dpdGgucHJvZmlsZVBpY1VybFxuICAgICAgICB9KTtcblxuICAgICAgICBvcGVuQ2hhdElkLmN1cnJlbnQgPSBjaGF0Lm1lc3NhZ2VzV2l0aC5faWQ7XG4gICAgICAgIGRpdlJlZi5jdXJyZW50ICYmIHNjcm9sbERpdlRvQm90dG9tKGRpdlJlZik7XG4gICAgICB9KTtcblxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJub0NoYXRGb3VuZFwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9ID0gYXdhaXQgZ2V0VXNlckluZm8ocm91dGVyLnF1ZXJ5Lm1lc3NhZ2UpO1xuXG4gICAgICAgIHNldEJhbm5lckRhdGEoeyBuYW1lLCBwcm9maWxlUGljVXJsIH0pO1xuICAgICAgICBzZXRNZXNzYWdlcyhbXSk7XG5cbiAgICAgICAgb3BlbkNoYXRJZC5jdXJyZW50ID0gcm91dGVyLnF1ZXJ5Lm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHNvY2tldC5jdXJyZW50ICYmIHJvdXRlci5xdWVyeS5tZXNzYWdlKSBsb2FkTWVzc2FnZXMoKTtcbiAgfSwgW3JvdXRlci5xdWVyeS5tZXNzYWdlXSk7XG5cbiAgY29uc3Qgc2VuZE1zZyA9IG1zZyA9PiB7XG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XG4gICAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZE5ld01zZ1wiLCB7XG4gICAgICAgIHVzZXJJZDogdXNlci5faWQsXG4gICAgICAgIG1zZ1NlbmRUb1VzZXJJZDogb3BlbkNoYXRJZC5jdXJyZW50LFxuICAgICAgICBtc2dcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBDb25maXJtaW5nIG1zZyBpcyBzZW50IGFuZCByZWNldmluZyB0aGUgbWVzc2FnZXMgdXNlRWZmZWN0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNvY2tldC5jdXJyZW50KSB7XG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm1zZ1NlbnRcIiwgKHsgbmV3TXNnIH0pID0+IHtcbiAgICAgICAgaWYgKG5ld01zZy5yZWNlaXZlciA9PT0gb3BlbkNoYXRJZC5jdXJyZW50KSB7XG4gICAgICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBbLi4ucHJldiwgbmV3TXNnXSk7XG5cbiAgICAgICAgICBzZXRDaGF0cyhwcmV2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzQ2hhdCA9IHByZXYuZmluZChcbiAgICAgICAgICAgICAgY2hhdCA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCA9PT0gbmV3TXNnLnJlY2VpdmVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJldmlvdXNDaGF0Lmxhc3RNZXNzYWdlID0gbmV3TXNnLm1zZztcbiAgICAgICAgICAgIHByZXZpb3VzQ2hhdC5kYXRlID0gbmV3TXNnLmRhdGU7XG5cbiAgICAgICAgICAgIHJldHVybiBbLi4ucHJldl07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm5ld01zZ1JlY2VpdmVkXCIsIGFzeW5jICh7IG5ld01zZyB9KSA9PiB7XG4gICAgICAgIGxldCBzZW5kZXJOYW1lO1xuXG4gICAgICAgIC8vIFdIRU4gQ0hBVCBXSVRIIFNFTkRFUiBJUyBDVVJSRU5UTFkgT1BFTkVEIElOU0lERSBZT1VSIEJST1dTRVJcbiAgICAgICAgaWYgKG5ld01zZy5zZW5kZXIgPT09IG9wZW5DaGF0SWQuY3VycmVudCkge1xuICAgICAgICAgIHNldE1lc3NhZ2VzKHByZXYgPT4gWy4uLnByZXYsIG5ld01zZ10pO1xuXG4gICAgICAgICAgc2V0Q2hhdHMocHJldiA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0NoYXQgPSBwcmV2LmZpbmQoXG4gICAgICAgICAgICAgIGNoYXQgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5zZW5kZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcmV2aW91c0NoYXQubGFzdE1lc3NhZ2UgPSBuZXdNc2cubXNnO1xuICAgICAgICAgICAgcHJldmlvdXNDaGF0LmRhdGUgPSBuZXdNc2cuZGF0ZTtcblxuICAgICAgICAgICAgc2VuZGVyTmFtZSA9IHByZXZpb3VzQ2hhdC5uYW1lO1xuXG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXZdO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGlmUHJldmlvdXNseU1lc3NhZ2VkID1cbiAgICAgICAgICAgIGNoYXRzLmZpbHRlcihjaGF0ID0+IGNoYXQubWVzc2FnZXNXaXRoID09PSBuZXdNc2cuc2VuZGVyKS5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgaWYgKGlmUHJldmlvdXNseU1lc3NhZ2VkKSB7XG4gICAgICAgICAgICBzZXRDaGF0cyhwcmV2ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDaGF0ID0gcHJldi5maW5kKFxuICAgICAgICAgICAgICAgIGNoYXQgPT4gY2hhdC5tZXNzYWdlc1dpdGggPT09IG5ld01zZy5zZW5kZXJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcHJldmlvdXNDaGF0Lmxhc3RNZXNzYWdlID0gbmV3TXNnLm1zZztcbiAgICAgICAgICAgICAgcHJldmlvdXNDaGF0LmRhdGUgPSBuZXdNc2cuZGF0ZTtcblxuICAgICAgICAgICAgICBzZW5kZXJOYW1lID0gcHJldmlvdXNDaGF0Lm5hbWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBwcmV2aW91c0NoYXQsXG4gICAgICAgICAgICAgICAgLi4ucHJldi5maWx0ZXIoY2hhdCA9PiBjaGF0Lm1lc3NhZ2VzV2l0aCAhPT0gbmV3TXNnLnNlbmRlcilcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vSUYgTk8gUFJFVklPVVMgQ0hBVCBXSVRIIFRIRSBTRU5ERVJcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY1VybCB9ID0gYXdhaXQgZ2V0VXNlckluZm8obmV3TXNnLnNlbmRlcik7XG4gICAgICAgICAgICBzZW5kZXJOYW1lID0gbmFtZTtcblxuICAgICAgICAgICAgY29uc3QgbmV3Q2hhdCA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZXNXaXRoOiBuZXdNc2cuc2VuZGVyLFxuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBwcm9maWxlUGljVXJsLFxuICAgICAgICAgICAgICBsYXN0TWVzc2FnZTogbmV3TXNnLm1zZyxcbiAgICAgICAgICAgICAgZGF0ZTogbmV3TXNnLmRhdGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRDaGF0cyhwcmV2ID0+IFtuZXdDaGF0LCAuLi5wcmV2XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmV3TXNnU291bmQoc2VuZGVyTmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgc2Nyb2xsRGl2VG9Cb3R0b20oZGl2UmVmKTtcbiAgfSwgW21lc3NhZ2VzXSk7XG5cbiAgY29uc3QgZGVsZXRlTXNnID0gbWVzc2FnZUlkID0+IHtcbiAgICBpZiAoc29ja2V0LmN1cnJlbnQpIHtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJkZWxldGVNc2dcIiwge1xuICAgICAgICB1c2VySWQ6IHVzZXIuX2lkLFxuICAgICAgICBtZXNzYWdlc1dpdGg6IG9wZW5DaGF0SWQuY3VycmVudCxcbiAgICAgICAgbWVzc2FnZUlkXG4gICAgICB9KTtcblxuICAgICAgc29ja2V0LmN1cnJlbnQub24oXCJtc2dEZWxldGVkXCIsICgpID0+IHtcbiAgICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBwcmV2LmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UuX2lkICE9PSBtZXNzYWdlSWQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVDaGF0ID0gYXN5bmMgbWVzc2FnZXNXaXRoID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke2Jhc2VVcmx9L2FwaS9jaGF0cy8ke21lc3NhZ2VzV2l0aH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cbiAgICAgIH0pO1xuXG4gICAgICBzZXRDaGF0cyhwcmV2ID0+IHByZXYuZmlsdGVyKGNoYXQgPT4gY2hhdC5tZXNzYWdlc1dpdGggIT09IG1lc3NhZ2VzV2l0aCkpO1xuICAgICAgcm91dGVyLnB1c2goXCIvbWVzc2FnZXNcIiwgdW5kZWZpbmVkLCB7IHNoYWxsb3c6IHRydWUgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3IgZGVsZXRpbmcgY2hhdFwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlZ21lbnQgcGFkZGVkIGJhc2ljIHNpemU9XCJsYXJnZVwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGljb249XCJob21lXCJcbiAgICAgICAgICBjb250ZW50PVwiR28gQmFjayFcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICA8Q2hhdExpc3RTZWFyY2ggY2hhdHM9e2NoYXRzfSBzZXRDaGF0cz17c2V0Q2hhdHN9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtjaGF0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8R3JpZCBzdGFja2FibGU+XG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgPENvbW1lbnQuR3JvdXAgc2l6ZT1cImJpZ1wiPlxuICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgcmFpc2VkIHN0eWxlPXt7IG92ZXJmbG93OiBcImF1dG9cIiwgbWF4SGVpZ2h0OiBcIjMycmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGF0cy5tYXAoKGNoYXQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hhdFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhdD17Y2hhdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZFVzZXJzPXtjb25uZWN0ZWRVc2Vyc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNoYXQ9e2RlbGV0ZUNoYXR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgPC9Db21tZW50Lkdyb3VwPlxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTJ9PlxuICAgICAgICAgICAgICAgIHtyb3V0ZXIucXVlcnkubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIzNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM1cmVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVzbW9rZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwic3RpY2t5XCIsIHRvcDogXCIwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyIGJhbm5lckRhdGE9e2Jhbm5lckRhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2UmVmPXtkaXZSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhbm5lclByb2ZpbGVQaWM9e2Jhbm5lckRhdGEucHJvZmlsZVBpY1VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlTXNnPXtkZWxldGVNc2d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VJbnB1dEZpZWxkIHNlbmRNc2c9e3NlbmRNc2d9IC8+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxOb01lc3NhZ2VzIC8+XG4gICAgICAgICl9XG4gICAgICA8L1NlZ21lbnQ+XG4gICAgPC8+XG4gICk7XG59XG5cbk1lc3NhZ2VzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGN0eCA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL2NoYXRzYCwge1xuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBjaGF0c0RhdGE6IHJlcy5kYXRhIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgZXJyb3JMb2FkaW5nOiB0cnVlIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzO1xuIiwiY29uc3QgYmFzZVVybCA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIlxuICAgID8gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIlxuICAgIDogXCJodHRwczovL2luZGVyLXNvY2lhbC1tZWRpYTIuaGVyb2t1YXBwLmNvbVwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVcmw7XG4iLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xuXG5jb25zdCBjYWxjdWxhdGVUaW1lID0gY3JlYXRlZEF0ID0+IHtcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoRGF0ZS5ub3coKSk7XG4gIGNvbnN0IHBvc3REYXRlID0gbW9tZW50KGNyZWF0ZWRBdCk7XG4gIGNvbnN0IGRpZmZJbkhvdXJzID0gdG9kYXkuZGlmZihwb3N0RGF0ZSwgXCJob3Vyc1wiKTtcblxuICBpZiAoZGlmZkluSG91cnMgPCAyNCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICBUb2RheSA8TW9tZW50IGZvcm1hdD1cImhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDI0ICYmIGRpZmZJbkhvdXJzIDwgMzYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgWWVzdGVyZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW0gQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMzYpIHtcbiAgICByZXR1cm4gPE1vbWVudCBmb3JtYXQ9XCJERC9NTS9ZWVlZIGhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlVGltZTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5jb25zdCBnZXRVc2VySW5mbyA9IGFzeW5jIHVzZXJUb0ZpbmRJZCA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9jaGF0cy91c2VyLyR7dXNlclRvRmluZElkfWAsIHtcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7IG5hbWU6IHJlcy5kYXRhLm5hbWUsIHByb2ZpbGVQaWNVcmw6IHJlcy5kYXRhLnByb2ZpbGVQaWNVcmwgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VXNlckluZm87XG4iLCJjb25zdCBuZXdNc2dTb3VuZCA9IHNlbmRlck5hbWUgPT4ge1xuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbyhcIi9saWdodC5tcDNcIik7XG5cbiAgc291bmQgJiYgc291bmQucGxheSgpO1xuXG4gIGlmIChzZW5kZXJOYW1lKSB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBgTmV3IG1lc3NhZ2UgZnJvbSAke3NlbmRlck5hbWV9YDtcblxuICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk1lc3NhZ2VzXCI7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ld01zZ1NvdW5kO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==