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
var chart_js_1 = require("chart.js");
var api_service_1 = require("../api.service");
var Prism = require("prismjs");
var login_service_1 = require("../services/login.service");
var router_1 = require("@angular/router");
var ng_pick_datetime_1 = require("ng-pick-datetime");
var platform_browser_1 = require("@angular/platform-browser");
require("ng-pick-datetime/assets/style/picker.min.css");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
var sort_1 = require("@angular/material/sort");
exports.MY_MOMENT_FORMATS = {
    parseInput: 'l LT',
    fullPickerInput: 'l LT',
    datePickerInput: 'l',
    timePickerInput: 'LT',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM YYYY',
};
var HomeComponent = /** @class */ (function () {
    function HomeComponent(api, _login, router, dateTimeAdapter) {
        this.api = api;
        this._login = _login;
        this.router = router;
        this.selectedMoment = new Date();
        this.selectedMoment2 = new Date();
        this.pie = [];
        this.piechar = [];
        this.barchar = [];
        this.labels = [];
        this.line = [];
        this.values = [];
        this.labeldias = [];
        this.dias_value = [];
        this.dias_value_movil = [];
        this.dias_value_tablet = [];
        this.creat_dias = [];
        this.creat_total = [];
        this.datatable = [];
        this.cargando = false;
        this.data = localStorage.getItem("data");
        this.displayedColumns = ['Id', 'Nombre', 'Apellido', 'Nacionalidad', "Edad"];
        dateTimeAdapter.setLocale('es-PE');
    }
    HomeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    HomeComponent.prototype.renderDataTable = function () {
        var _this = this;
        this.api.getUsuarios()
            .subscribe(function (x) {
            _this.dataSource = new table_1.MatTableDataSource();
            _this.dataSource.data = x;
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            console.log(_this.dataSource.data);
        }, function (error) {
            console.log('There was an error while retrieving Usuarios!' + error);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderDataTable();
        if (this._login.getCurrentUser == false) {
            this.router.navigate(['']);
        }
        this.cargando = true;
        var emp = localStorage.getItem("currentEmpresa");
        this.api.getDatos(emp)
            .subscribe(function (res) {
            var dataTable = res['creatives'];
            console.log("tabla", res['tabla']);
            _this.ingreso_cpm = res['ingreso'].map(function (res) { return res.ingreso_cpm; });
            _this.ingreso_total = res['ingreso'].map(function (res) { return res.ingreso_total; });
            _this.impresiones = res['ingreso'].map(function (res) { return res.impresiones; });
            var alldates = res['data'].map(function (res) { return res.total; });
            var alllabels = res['data'].map(function (res) { return res.dimensionad_exchange_device_category; });
            var dias_val = res['diario'].map(function (res) { return res.dimensionad_exchange_date; });
            var dias_valdesc = res['diario_desktop'].map(function (res) { return res.total; });
            var dias_valmovil = res['diario_movil'].map(function (res) { return res.total; });
            var dias_valtablet = res['diario_tablet'].map(function (res) { return res.total; });
            var creative_sizes = res['creatives'].map(function (res) { return res.dimensionad_exchange_creative_sizes; });
            var creative_total = res['creatives'].map(function (res) { return res.total; });
            alllabels.forEach(function (res) { _this.labels.push(res); });
            alldates.forEach(function (res) { _this.values.push(res); });
            dias_val.forEach(function (res) { _this.labeldias.push(res); });
            dias_valdesc.forEach(function (res) { _this.dias_value.push(res); });
            dias_valmovil.forEach(function (res) { _this.dias_value_movil.push(res); });
            dias_valtablet.forEach(function (res) { _this.dias_value_tablet.push(res); });
            creative_sizes.forEach(function (res) { _this.creat_dias.push(res); });
            creative_total.forEach(function (res) { _this.creat_total.push(res); });
            var otro = _this.api.getPie(_this.creat_dias, _this.creat_total, 'canvas4', 'Ingreso por creatividad');
            var piechar = new chart_js_1.Chart('canvas', {
                type: 'doughnut',
                data: {
                    labels: _this.labels,
                    datasets: [
                        {
                            data: _this.values,
                            borderColor: '#3cba9f',
                            fill: true,
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
                    pieceLabel: {
                        fontColor: '#000'
                    },
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'rgb(0,0,0)',
                            boxWidth: 10,
                            padding: 20
                        }
                    },
                    title: {
                        display: true,
                        text: 'Ingresos por dispositivo',
                        position: 'top'
                    },
                    scales: {
                        xAxes: [{
                                ticks: { beginAtZero: true }
                            }],
                        yAxes: [{
                                ticks: { beginAtZero: true }
                            }]
                    }
                }
            });
            _this.barchar = new chart_js_1.Chart('canvas2', {
                type: 'line',
                data: {
                    labels: _this.labeldias,
                    datasets: [
                        {
                            label: "Desktop",
                            fill: true,
                            lineTension: 0,
                            backgroundColor: "RGBA(0,233,168,0.3)",
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
                            // notice the gap in the data and the spanGaps: true
                            data: _this.dias_value,
                            spanGaps: true,
                        },
                        {
                            label: "Mobil",
                            fill: true,
                            lineTension: 0,
                            backgroundColor: "RGBA(61,0,255,0.3)",
                            borderColor: "blue",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "blue",
                            pointBackgroundColor: "white",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "blue",
                            pointHoverBorderColor: "blue",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            // notice the gap in the data and the spanGaps: false
                            data: _this.dias_value_movil,
                            spanGaps: false,
                        },
                        {
                            label: "Tablet",
                            fill: true,
                            lineTension: 0,
                            backgroundColor: "RGBA(246,91,246,0.3)",
                            borderColor: "#F65BF6",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "#F65BF6",
                            pointBackgroundColor: "F65BF6",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "#F65BF6",
                            pointHoverBorderColor: "#F65BF6",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            // notice the gap in the data and the spanGaps: false
                            data: _this.dias_value_tablet,
                            spanGaps: false,
                        }
                    ],
                },
                options: {
                    legend: {
                        display: true,
                    },
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Ingreso por día'
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
                                    beginAtZero: true
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Dolares',
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
        });
        this.cargando = false;
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    HomeComponent.prototype.enviaFechas = function () {
        this.labels = [];
        this.values = [];
        var empresa = localStorage.getItem("currentEmpresa");
        console.log("empresa", empresa);
        var fec1 = this.selectedMoment.toDateString().split(" ", 4);
        var fec2 = this.selectedMoment2.toDateString().split(" ", 4);
        this.loadDatos(fec1[1] + fec1[2] + fec1[3], fec2[1] + fec2[2] + fec2[3], empresa);
    };
    /*carga datos click*/
    HomeComponent.prototype.loadDatos = function (inicio, final, empresa) {
        var _this = this;
        this.labels = [];
        this.values = [];
        this.labeldias = [];
        this.dias_value = [];
        this.dias_value_movil = [];
        this.dias_value_tablet = [];
        this.resetChart();
        this.cargando = true;
        this.api.getReportes(inicio, final, empresa)
            .subscribe(function (res) {
            _this.ingreso_cpm = res['ingreso'].map(function (res) { return res.ingreso_cpm; });
            _this.ingreso_total = res['ingreso'].map(function (res) { return res.ingreso_total; });
            _this.impresiones = res['ingreso'].map(function (res) { return res.impresiones; });
            var alldates = res['data'].map(function (res) { return res.total; });
            var alllabels = res['data'].map(function (res) { return res.dimensionad_exchange_device_category; });
            var dias = res['diario_desktop'].map(function (res) { return res.dimensionad_exchange_date; });
            var dias_val = res['diario_desktop'].map(function (res) { return res.total; });
            var dias_valmovil = res['diario_movil'].map(function (res) { return res.total; });
            var dias_valtablet = res['diario_tablet'].map(function (res) { return res.total; });
            alllabels.forEach(function (res) { _this.labels.push(res); });
            alldates.forEach(function (res) { _this.values.push(res); });
            dias.forEach(function (res) { _this.labeldias.push(res); });
            dias_val.forEach(function (res) { _this.dias_value.push(res); });
            dias_valmovil.forEach(function (res) { _this.dias_value_movil.push(res); });
            dias_valtablet.forEach(function (res) { _this.dias_value_tablet.push(res); });
            if (_this.window != undefined)
                _this.window.destroy();
            _this.window = new chart_js_1.Chart(_this.piechar, {});
            var piechar = new chart_js_1.Chart('canvas', {
                type: 'doughnut',
                data: {
                    labels: _this.labels,
                    datasets: [
                        {
                            data: _this.values,
                            borderColor: '#3cba9f',
                            fill: true,
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
                        display: true
                    },
                    scales: {
                        xAxes: [{
                                display: true
                            }],
                        yAxes: [{
                                display: true
                            }]
                    }
                }
            });
            _this.barchar = new chart_js_1.Chart('canvas2', {
                type: 'line',
                data: {
                    labels: _this.labeldias,
                    datasets: [
                        {
                            label: "Desktop",
                            fill: true,
                            lineTension: 0,
                            backgroundColor: "RGBA(0,233,168,0.3)",
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
                            // notice the gap in the data and the spanGaps: true
                            data: _this.dias_value,
                            spanGaps: true,
                        },
                        {
                            label: "Mobil",
                            fill: true,
                            lineTension: 0,
                            backgroundColor: "RGBA(61,0,255,0.3)",
                            borderColor: "blue",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "blue",
                            pointBackgroundColor: "white",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "blue",
                            pointHoverBorderColor: "blue",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            // notice the gap in the data and the spanGaps: false
                            data: _this.dias_value_movil,
                            spanGaps: false,
                        },
                        {
                            label: "Tablet",
                            fill: true,
                            lineTension: 0,
                            backgroundColor: "RGBA(246,91,246,0.3)",
                            borderColor: "#F65BF6",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: "#F65BF6",
                            pointBackgroundColor: "F65BF6",
                            pointBorderWidth: 1,
                            pointHoverRadius: 8,
                            pointHoverBackgroundColor: "#F65BF6",
                            pointHoverBorderColor: "#F65BF6",
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            // notice the gap in the data and the spanGaps: false
                            data: _this.dias_value_tablet,
                            spanGaps: false,
                        }
                    ],
                },
                options: {
                    legend: {
                        display: true,
                    },
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Ingreso por día'
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
                                    beginAtZero: true
                                },
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Dolares',
                                    fontSize: 20
                                }
                            }]
                    }
                }
            });
            _this.cargando = false;
        });
    };
    HomeComponent.prototype.resetChart = function () {
        var pieChartContent = document.getElementById('pieChartContent');
        pieChartContent.innerHTML = '&nbsp;';
        pieChartContent.innerHTML = '<canvas id="canvas"><canvas>';
        var barChartContent = document.getElementById('barChartContent');
        barChartContent.innerHTML = '&nbsp;';
        barChartContent.innerHTML = '<canvas id="canvas2"><canvas>';
    };
    __decorate([
        core_1.ViewChild(sort_1.MatSort),
        __metadata("design:type", sort_1.MatSort)
    ], HomeComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator),
        __metadata("design:type", paginator_1.MatPaginator)
    ], HomeComponent.prototype, "paginator", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
        }),
        core_1.NgModule({
            imports: [ng_pick_datetime_1.OwlDateTimeModule, ng_pick_datetime_1.OwlNativeDateTimeModule, platform_browser_1.BrowserModule, paginator_1.MatPaginatorModule],
            providers: [{ provide: ng_pick_datetime_1.OWL_DATE_TIME_FORMATS, useValue: exports.MY_MOMENT_FORMATS },]
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, login_service_1.LoginService, router_1.Router, ng_pick_datetime_1.DateTimeAdapter])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map