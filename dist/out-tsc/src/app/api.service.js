"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var chart_js_1 = require("chart.js");
require("rxjs/add/operator/map");
var global_1 = require("./global");
var operators_1 = require("rxjs/operators");
var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
        this.headers = new http_1.HttpHeaders({ "Content-type": "application/json" });
        this.url = "http://slim.com/api.php/productos";
    }
    ApiService.prototype.getProductos = function () {
        return this._http.get(this.url);
    };
    ApiService.prototype.getReportes = function (inicio, final, empresa) {
        var url = global_1.Global.BASE_API_URL + 'api.php/reporte';
        return this._http.post(url, {
            ini: inicio,
            fin: final,
            emp: empresa
        }, { headers: this.headers }).pipe(operators_1.map(function (data) { return data; }));
    };
    ApiService.prototype.getDatos = function (empresa) {
        return this._http.post(global_1.Global.BASE_API_URL + 'api.php/inicio', {
            emp: empresa
        }, { headers: this.headers }).pipe(operators_1.map(function (result) { return result; }));
    };
    ApiService.prototype.getUsuarios = function () {
        return this._http.get(global_1.Global.BASE_API_URL + 'api.php/inicio');
    };
    ApiService.prototype.getPie = function (labels, datos, canvas, titulo) {
        return new chart_js_1.Chart(canvas, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        fill: true,
                        lineTension: 0,
                        //backgroundColor: "RGBA(0,233,168,0.3)",
                        borderColor: "#3cb371",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "3cb371",
                        pointBackgroundColor: "3cb371",
                        pointBorderWidth: 1,
                        pointHoverRadius: 8,
                        pointHoverBackgroundColor: "#3cb371",
                        pointHoverBorderColor: "3cb371",
                        pointHoverBorderWidth: 2,
                        pointRadius: 4,
                        pointHitRadius: 10,
                        data: datos,
                        //borderColor: '#3cba9f',
                        //fill: true,
                        backgroundColor: [
                            "#3cb371",
                            "#0000FF",
                            "#9966FF",
                            "#4C4CFF",
                            "#00FFFF",
                            "#f990a7",
                            "#aad2ed",
                            "#FF00FF",
                            "Blue",
                            "Red",
                            "Blue"
                        ]
                    }
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                responsive: true,
                title: {
                    display: false,
                    text: titulo,
                    fontSize: 17
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: false
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Dolares',
                                fontSize: 25
                            }
                        }]
                }
            }
        });
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map