(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_1 = __webpack_require__(/*! @socketio/api/user */ "./libs/api/user/src/index.ts");
const chat_1 = __webpack_require__(/*! @socketio/api/chat */ "./libs/api/chat/src/index.ts");
const room_1 = __webpack_require__(/*! @socketio/api/room */ "./libs/api/room/src/index.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [user_1.ApiUserModule, chat_1.ApiChatModule, room_1.ApiRoomModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./libs/api/auth/src/index.ts":
/*!************************************!*\
  !*** ./libs/api/auth/src/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-auth.module */ "./libs/api/auth/src/lib/api-auth.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/auth.service */ "./libs/api/auth/src/lib/auth.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/jwt.guard */ "./libs/api/auth/src/lib/jwt.guard.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/jwt.strategy */ "./libs/api/auth/src/lib/jwt.strategy.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/get-user.decorator */ "./libs/api/auth/src/lib/get-user.decorator.ts"), exports);


/***/ }),

/***/ "./libs/api/auth/src/lib/api-auth.module.ts":
/*!**************************************************!*\
  !*** ./libs/api/auth/src/lib/api-auth.module.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAuthModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const data_access_1 = __webpack_require__(/*! @socketio/api/data-access */ "./libs/api/data-access/src/index.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./libs/api/auth/src/lib/auth.service.ts");
const jwt_guard_1 = __webpack_require__(/*! ./jwt.guard */ "./libs/api/auth/src/lib/jwt.guard.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./libs/api/auth/src/lib/jwt.strategy.ts");
let ApiAuthModule = class ApiAuthModule {
};
ApiAuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            data_access_1.ApiDataAccessModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET,
                signOptions: { expiresIn: '1h' },
            }),
        ],
        controllers: [],
        providers: [auth_service_1.AuthService, jwt_guard_1.JwtGuard, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService, jwt_guard_1.JwtGuard, jwt_strategy_1.JwtStrategy, jwt_1.JwtModule],
    })
], ApiAuthModule);
exports.ApiAuthModule = ApiAuthModule;


/***/ }),

/***/ "./libs/api/auth/src/lib/auth.service.ts":
/*!***********************************************!*\
  !*** ./libs/api/auth/src/lib/auth.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bcrypt_1 = __webpack_require__(/*! bcrypt */ "bcrypt");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const data_access_1 = __webpack_require__(/*! @socketio/api/data-access */ "./libs/api/data-access/src/index.ts");
let AuthService = class AuthService {
    constructor(jwtService, dataService) {
        this.jwtService = jwtService;
        this.dataService = dataService;
    }
    add(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                user.password = yield this.hashPassword(user.password);
                const newUser = yield this.dataService.user.create({ data: user });
                delete newUser.password;
                return { token: this.jwtService.sign(newUser) };
            }
            catch (error) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Email already exist');
                }
            }
        });
    }
    login({ email, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.dataService.user.findUnique({ where: { email } });
            if (!user)
                throw new common_1.NotFoundException('User not found...');
            const isValid = yield bcrypt_1.compare(password, user.password);
            if (!isValid)
                throw new common_1.UnauthorizedException('Wrong credentials');
            delete user.password;
            return { token: this.jwtService.sign(user) };
        });
    }
    hashPassword(password) {
        return bcrypt_1.hash(password, 10);
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof data_access_1.DataService !== "undefined" && data_access_1.DataService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./libs/api/auth/src/lib/get-user.decorator.ts":
/*!*****************************************************!*\
  !*** ./libs/api/auth/src/lib/get-user.decorator.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.GetUser = common_1.createParamDecorator((_data, context) => {
    return context.switchToHttp().getRequest().user;
});


/***/ }),

/***/ "./libs/api/auth/src/lib/jwt.guard.ts":
/*!********************************************!*\
  !*** ./libs/api/auth/src/lib/jwt.guard.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtGuard = class JwtGuard extends passport_1.AuthGuard('jwt') {
};
JwtGuard = tslib_1.__decorate([
    common_1.Injectable()
], JwtGuard);
exports.JwtGuard = JwtGuard;


/***/ }),

/***/ "./libs/api/auth/src/lib/jwt.strategy.ts":
/*!***********************************************!*\
  !*** ./libs/api/auth/src/lib/jwt.strategy.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const data_access_1 = __webpack_require__(/*! @socketio/api/data-access */ "./libs/api/data-access/src/index.ts");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(dataService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.SECRET,
        });
        this.dataService = dataService;
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.dataService.user.findUnique({
                where: { id: payload.id },
            });
            if (!user)
                throw new common_1.UnauthorizedException();
            return payload;
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_1.DataService !== "undefined" && data_access_1.DataService) === "function" ? _a : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./libs/api/chat/src/index.ts":
/*!************************************!*\
  !*** ./libs/api/chat/src/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-chat.module */ "./libs/api/chat/src/lib/api-chat.module.ts"), exports);


/***/ }),

/***/ "./libs/api/chat/src/lib/api-chat.module.ts":
/*!**************************************************!*\
  !*** ./libs/api/chat/src/lib/api-chat.module.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiChatModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const chat_gateway_1 = __webpack_require__(/*! ./chat.gateway */ "./libs/api/chat/src/lib/chat.gateway.ts");
const auth_1 = __webpack_require__(/*! @socketio/api/auth */ "./libs/api/auth/src/index.ts");
const data_access_1 = __webpack_require__(/*! @socketio/api/data-access */ "./libs/api/data-access/src/index.ts");
const room_1 = __webpack_require__(/*! @socketio/api/room */ "./libs/api/room/src/index.ts");
let ApiChatModule = class ApiChatModule {
};
ApiChatModule = tslib_1.__decorate([
    common_1.Module({
        imports: [auth_1.ApiAuthModule, data_access_1.ApiDataAccessModule, room_1.ApiRoomModule],
        providers: [chat_gateway_1.ChatGateway],
        exports: [chat_gateway_1.ChatGateway],
    })
], ApiChatModule);
exports.ApiChatModule = ApiChatModule;


/***/ }),

/***/ "./libs/api/chat/src/lib/chat.gateway.ts":
/*!***********************************************!*\
  !*** ./libs/api/chat/src/lib/chat.gateway.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const data_access_1 = __webpack_require__(/*! @socketio/api/data-access */ "./libs/api/data-access/src/index.ts");
const models_1 = __webpack_require__(/*! @socketio/api/models */ "./libs/api/models/src/index.ts");
const room_1 = __webpack_require__(/*! @socketio/api/room */ "./libs/api/room/src/index.ts");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
let ChatGateway = class ChatGateway {
    constructor(jwtService, dataService, roomService) {
        this.jwtService = jwtService;
        this.dataService = dataService;
        this.roomService = roomService;
    }
    handleConnection(socket) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const [, token] = socket.handshake.headers.authorization.split(' ');
                const decoded = yield this.jwtService.verify(token);
                const user = yield this.dataService.user.findUnique({ where: { id: decoded.id } });
                if (!user)
                    return this.disconnect(socket);
                socket.data.user = user;
                const rooms = yield this.roomService.getRoomsByUserId(user.id, {
                    page: 1,
                    limit: 10,
                });
                console.log(user);
                this.server.emit('message', `Welcome ${user.username}!`);
                this.server.emit('rooms', rooms);
            }
            catch (error) {
                console.log(error);
                this.disconnect(socket);
            }
        });
    }
    handlecreateRoom(socket, room) {
        return this.roomService.create(room, socket.data.user);
    }
    handleDisconnect(socket) {
        socket.disconnect();
    }
    disconnect(socket) {
        socket.emit('Error', new common_1.UnauthorizedException());
        socket.disconnect();
    }
};
tslib_1.__decorate([
    websockets_1.WebSocketServer(),
    tslib_1.__metadata("design:type", typeof (_a = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _a : Object)
], ChatGateway.prototype, "server", void 0);
tslib_1.__decorate([
    websockets_1.SubscribeMessage('createRoom'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _b : Object, typeof (_c = typeof models_1.RoomDto !== "undefined" && models_1.RoomDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ChatGateway.prototype, "handlecreateRoom", null);
tslib_1.__decorate([
    websockets_1.SubscribeMessage('disconnect'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof socket_io_1.Socket !== "undefined" && socket_io_1.Socket) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleDisconnect", null);
ChatGateway = tslib_1.__decorate([
    websockets_1.WebSocketGateway({
        cors: { origin: ['https://hoppscotch.io', 'http://localhost:4200'] },
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _f : Object, typeof (_g = typeof data_access_1.DataService !== "undefined" && data_access_1.DataService) === "function" ? _g : Object, typeof (_h = typeof room_1.RoomService !== "undefined" && room_1.RoomService) === "function" ? _h : Object])
], ChatGateway);
exports.ChatGateway = ChatGateway;


/***/ }),

/***/ "./libs/api/data-access/src/index.ts":
/*!*******************************************!*\
  !*** ./libs/api/data-access/src/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-data-access.module */ "./libs/api/data-access/src/lib/api-data-access.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/data.service */ "./libs/api/data-access/src/lib/data.service.ts"), exports);


/***/ }),

/***/ "./libs/api/data-access/src/lib/api-data-access.module.ts":
/*!****************************************************************!*\
  !*** ./libs/api/data-access/src/lib/api-data-access.module.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDataAccessModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const data_service_1 = __webpack_require__(/*! ./data.service */ "./libs/api/data-access/src/lib/data.service.ts");
let ApiDataAccessModule = class ApiDataAccessModule {
};
ApiDataAccessModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [],
        providers: [data_service_1.DataService],
        exports: [data_service_1.DataService],
    })
], ApiDataAccessModule);
exports.ApiDataAccessModule = ApiDataAccessModule;


/***/ }),

/***/ "./libs/api/data-access/src/lib/data.service.ts":
/*!******************************************************!*\
  !*** ./libs/api/data-access/src/lib/data.service.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let DataService = class DataService extends client_1.PrismaClient {
    onModuleInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.$connect();
        });
    }
    onModuleDestroy() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.$disconnect();
        });
    }
};
DataService = tslib_1.__decorate([
    common_1.Injectable()
], DataService);
exports.DataService = DataService;


/***/ }),

/***/ "./libs/api/models/src/index.ts":
/*!**************************************!*\
  !*** ./libs/api/models/src/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/user-dto */ "./libs/api/models/src/lib/user-dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/login-dto */ "./libs/api/models/src/lib/login-dto.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/room-dto */ "./libs/api/models/src/lib/room-dto.ts"), exports);


/***/ }),

/***/ "./libs/api/models/src/lib/login-dto.ts":
/*!**********************************************!*\
  !*** ./libs/api/models/src/lib/login-dto.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;


/***/ }),

/***/ "./libs/api/models/src/lib/room-dto.ts":
/*!*********************************************!*\
  !*** ./libs/api/models/src/lib/room-dto.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomDto = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RoomDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], RoomDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], RoomDto.prototype, "description", void 0);
exports.RoomDto = RoomDto;


/***/ }),

/***/ "./libs/api/models/src/lib/user-dto.ts":
/*!*********************************************!*\
  !*** ./libs/api/models/src/lib/user-dto.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UserDto {
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "password", void 0);
exports.UserDto = UserDto;


/***/ }),

/***/ "./libs/api/room/src/index.ts":
/*!************************************!*\
  !*** ./libs/api/room/src/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-room.module */ "./libs/api/room/src/lib/api-room.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/room.service */ "./libs/api/room/src/lib/room.service.ts"), exports);


/***/ }),

/***/ "./libs/api/room/src/lib/api-room.module.ts":
/*!**************************************************!*\
  !*** ./libs/api/room/src/lib/api-room.module.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRoomModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const room_service_1 = __webpack_require__(/*! ./room.service */ "./libs/api/room/src/lib/room.service.ts");
const data_access_1 = __webpack_require__(/*! @socketio/api/data-access */ "./libs/api/data-access/src/index.ts");
const room_controller_1 = __webpack_require__(/*! ./room.controller */ "./libs/api/room/src/lib/room.controller.ts");
let ApiRoomModule = class ApiRoomModule {
};
ApiRoomModule = tslib_1.__decorate([
    common_1.Module({
        imports: [data_access_1.ApiDataAccessModule],
        controllers: [room_controller_1.RoomController],
        providers: [room_service_1.RoomService],
        exports: [room_service_1.RoomService],
    })
], ApiRoomModule);
exports.ApiRoomModule = ApiRoomModule;


/***/ }),

/***/ "./libs/api/room/src/lib/room.controller.ts":
/*!**************************************************!*\
  !*** ./libs/api/room/src/lib/room.controller.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const client_1 = __webpack_require__(/*! .prisma/client */ ".prisma/client");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const room_service_1 = __webpack_require__(/*! ./room.service */ "./libs/api/room/src/lib/room.service.ts");
const models_1 = __webpack_require__(/*! @socketio/api/models */ "./libs/api/models/src/index.ts");
const auth_1 = __webpack_require__(/*! @socketio/api/auth */ "./libs/api/auth/src/index.ts");
let RoomController = class RoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    getAll() {
        return this.roomService.getAll();
    }
    create(room, user) {
        return this.roomService.create(room, user);
    }
    addUser(id, user) {
        return this.roomService.addUser(id, user.id);
    }
    removeUser(id, user) {
        return this.roomService.removeUser(id, user.id);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], RoomController.prototype, "getAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__param(1, auth_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof models_1.RoomDto !== "undefined" && models_1.RoomDto) === "function" ? _b : Object, typeof (_c = typeof client_1.User !== "undefined" && client_1.User) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], RoomController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Patch(':id/user'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__param(1, auth_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_e = typeof client_1.User !== "undefined" && client_1.User) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], RoomController.prototype, "addUser", null);
tslib_1.__decorate([
    common_1.Delete(':id/user'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__param(1, auth_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_g = typeof client_1.User !== "undefined" && client_1.User) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], RoomController.prototype, "removeUser", null);
RoomController = tslib_1.__decorate([
    common_1.UseGuards(auth_1.JwtGuard),
    common_1.Controller('room'),
    tslib_1.__metadata("design:paramtypes", [typeof (_j = typeof room_service_1.RoomService !== "undefined" && room_service_1.RoomService) === "function" ? _j : Object])
], RoomController);
exports.RoomController = RoomController;


/***/ }),

/***/ "./libs/api/room/src/lib/room.service.ts":
/*!***********************************************!*\
  !*** ./libs/api/room/src/lib/room.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const data_access_1 = __webpack_require__(/*! @socketio/api/data-access */ "./libs/api/data-access/src/index.ts");
let RoomService = class RoomService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.dataService.room.findMany({ include: { users: true } });
        });
    }
    create(room, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newRoom = yield this.dataService.room.create({ data: room });
            return this.addUser(newRoom.id, user.id);
        });
    }
    getRoomsByUserId(userId, { page = 1, limit = 10 }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { rooms } = yield this.dataService.user.findUnique({
                where: { id: userId },
                select: {
                    rooms: { take: limit, skip: (page - 1) * limit, orderBy: { updatedAt: 'desc' } },
                },
            });
            return rooms;
        });
    }
    addUser(id, userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!userId)
                throw new common_1.UnauthorizedException();
            const room = yield this.dataService.room.findUnique({ where: { id } });
            if (!room)
                throw new common_1.NotFoundException('Room not found');
            return yield this.dataService.room.update({
                where: { id },
                data: { users: { connect: { id: userId } } },
                include: { users: true },
            });
        });
    }
    removeUser(id, userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!userId)
                throw new common_1.UnauthorizedException();
            const room = yield this.dataService.room.findUnique({ where: { id } });
            if (!room)
                throw new common_1.NotFoundException('Room not found');
            return yield this.dataService.room.update({
                where: { id },
                data: { users: { disconnect: { id: userId } } },
                include: { users: true },
            });
        });
    }
};
RoomService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_1.DataService !== "undefined" && data_access_1.DataService) === "function" ? _a : Object])
], RoomService);
exports.RoomService = RoomService;


/***/ }),

/***/ "./libs/api/user/src/index.ts":
/*!************************************!*\
  !*** ./libs/api/user/src/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-user.module */ "./libs/api/user/src/lib/api-user.module.ts"), exports);


/***/ }),

/***/ "./libs/api/user/src/lib/api-user.module.ts":
/*!**************************************************!*\
  !*** ./libs/api/user/src/lib/api-user.module.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUserModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_1 = __webpack_require__(/*! @socketio/api/auth */ "./libs/api/auth/src/index.ts");
const data_access_1 = __webpack_require__(/*! @socketio/api/data-access */ "./libs/api/data-access/src/index.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./libs/api/user/src/lib/user.controller.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./libs/api/user/src/lib/user.service.ts");
let ApiUserModule = class ApiUserModule {
};
ApiUserModule = tslib_1.__decorate([
    common_1.Module({
        imports: [data_access_1.ApiDataAccessModule, auth_1.ApiAuthModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], ApiUserModule);
exports.ApiUserModule = ApiUserModule;


/***/ }),

/***/ "./libs/api/user/src/lib/user.controller.ts":
/*!**************************************************!*\
  !*** ./libs/api/user/src/lib/user.controller.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const client_1 = __webpack_require__(/*! .prisma/client */ ".prisma/client");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_1 = __webpack_require__(/*! @socketio/api/auth */ "./libs/api/auth/src/index.ts");
const models_1 = __webpack_require__(/*! @socketio/api/models */ "./libs/api/models/src/index.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./libs/api/user/src/lib/user.service.ts");
let UserController = class UserController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    getAll(page, limit, user) {
        console.log(user);
        return this.userService.getAll(page, limit);
    }
    add(user) {
        return this.authService.add(user);
    }
    login(user) {
        return this.authService.login(user);
    }
};
tslib_1.__decorate([
    common_1.UseGuards(auth_1.JwtGuard),
    common_1.Get('user'),
    tslib_1.__param(0, common_1.Query('page')),
    tslib_1.__param(1, common_1.Query('limit')),
    tslib_1.__param(2, auth_1.GetUser()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, typeof (_a = typeof client_1.User !== "undefined" && client_1.User) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserController.prototype, "getAll", null);
tslib_1.__decorate([
    common_1.Post('register'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof models_1.UserDto !== "undefined" && models_1.UserDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UserController.prototype, "add", null);
tslib_1.__decorate([
    common_1.Post('login'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof models_1.LoginDto !== "undefined" && models_1.LoginDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UserController.prototype, "login", null);
UserController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _g : Object, typeof (_h = typeof auth_1.AuthService !== "undefined" && auth_1.AuthService) === "function" ? _h : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./libs/api/user/src/lib/user.data.ts":
/*!********************************************!*\
  !*** ./libs/api/user/src/lib/user.data.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.userQuery = void 0;
exports.userQuery = {
    select: { id: true, email: true, username: true, createdAt: true },
};


/***/ }),

/***/ "./libs/api/user/src/lib/user.service.ts":
/*!***********************************************!*\
  !*** ./libs/api/user/src/lib/user.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const data_access_1 = __webpack_require__(/*! @socketio/api/data-access */ "./libs/api/data-access/src/index.ts");
const user_data_1 = __webpack_require__(/*! ./user.data */ "./libs/api/user/src/lib/user.data.ts");
let UserService = class UserService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getAll(page = '1', limit = '100') {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.dataService.user.findMany(Object.assign(Object.assign({}, user_data_1.userQuery), { take: Number(limit), skip: (Number(page) - 1) * Number(limit) }));
        });
    }
};
UserService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof data_access_1.DataService !== "undefined" && data_access_1.DataService) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ ".prisma/client":
/*!*********************************!*\
  !*** external ".prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require(".prisma/client");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\abelf\Desktop\code\sockets\apps\api\src\main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map