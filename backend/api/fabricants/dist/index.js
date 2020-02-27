"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello world!");
});
mongoose_1.default
    .connect('mongodb://mongo:27017/expressmongo', {
    useNewUrlParser: true
})
    .then(result => {
    // console.log('MongoDB Conectado');
})
    .catch(error => {
    throw new Error(error);
});
// app.listen(9001, () => console.log('Active server on 9001'));
app.listen(9001);
//# sourceMappingURL=index.js.map