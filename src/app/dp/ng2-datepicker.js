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
var forms_1 = require("@angular/forms");
var moment_ = require("moment");
var moment = moment_.default || moment_;
exports.CALENDAR_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return DatePickerComponent; }),
    multi: true
};
var DatePickerComponent = (function () {
    function DatePickerComponent(viewContainerRef) {
        this.date = moment();
        this.viewDate = null;
        this.days = [];
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.el = viewContainerRef.element.nativeElement;
    }
    Object.defineProperty(DatePickerComponent.prototype, "value", {
        get: function () {
            return this.viewDate;
        },
        set: function (value) {
            var date = (value instanceof moment) ? value : moment(value, this.format);
            this.viewDate = date.format(this.viewFormat);
            this.onChangeCallback(value);
        },
        enumerable: true,
        configurable: true
    });
    DatePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.class = "ui-kit-calendar-container " + this.class;
        this.opened = this.opened || false;
        this.format = this.format || 'YYYY-MM-DD';
        this.viewFormat = this.viewFormat || 'D MMMM YYYY';
        this.firstWeekdaySunday = this.firstWeekdaySunday || false;
        setTimeout(function () {
            if (!_this.viewDate) {
                var value = moment();
                _this.value = value;
                _this.onChangeCallback(value.format(_this.format));
            }
            _this.generateCalendar();
        });
        var body = document.querySelector('body');
        body.addEventListener('click', function (e) {
            if (!_this.opened || !e.target) {
                return;
            }
            ;
            if (_this.el !== e.target && !_this.el.contains(e.target)) {
                _this.close();
            }
        }, false);
    };
    DatePickerComponent.prototype.generateCalendar = function () {
        var date = moment(this.date);
        var month = date.month();
        var year = date.year();
        var n = 1;
        var firstWeekDay = (this.firstWeekdaySunday) ? date.date(2).day() : date.date(1).day();
        if (firstWeekDay !== 1) {
            n -= (firstWeekDay + 6) % 7;
        }
        this.days = [];
        var selectedDate = moment(this.value, this.viewFormat);
        for (var i = n; i <= date.endOf('month').date(); i += 1) {
            var currentDate = moment(i + "." + (month + 1) + "." + year, 'DD.MM.YYYY');
            var today = (moment().isSame(currentDate, 'day') && moment().isSame(currentDate, 'month')) ? true : false;
            var selected = (selectedDate.isSame(currentDate, 'day')) ? true : false;
            if (i > 0) {
                this.days.push({
                    day: i,
                    month: month + 1,
                    year: year,
                    enabled: true,
                    today: today,
                    selected: selected
                });
            }
            else {
                this.days.push({
                    day: null,
                    month: null,
                    year: null,
                    enabled: false,
                    today: false,
                    selected: false
                });
            }
        }
    };
    DatePickerComponent.prototype.selectDate = function (e, i) {
        e.preventDefault();
        var date = this.days[i];
        var selectedDate = moment(date.day + "." + date.month + "." + date.year, 'DD.MM.YYYY');
        this.value = selectedDate.format(this.format);
        this.viewDate = selectedDate.format(this.viewFormat);
        this.close();
        this.generateCalendar();
    };
    DatePickerComponent.prototype.prevMonth = function () {
        this.date = this.date.subtract(1, 'month');
        this.generateCalendar();
    };
    DatePickerComponent.prototype.nextMonth = function () {
        this.date = this.date.add(1, 'month');
        this.generateCalendar();
    };
    DatePickerComponent.prototype.writeValue = function (value) {
        this.viewDate = value;
    };
    DatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    DatePickerComponent.prototype.toggle = function () {
        this.opened = !this.opened;
    };
    DatePickerComponent.prototype.open = function () {
        this.opened = true;
    };
    DatePickerComponent.prototype.close = function () {
        this.opened = false;
    };
    return DatePickerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "class", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "expanded", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "opened", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "format", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "viewFormat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "firstWeekdaySunday", void 0);
DatePickerComponent = __decorate([
    core_1.Component({
        moduleId: 'module.id',
        selector: 'datepicker',
        templateUrl: './ng2-datepicker.component.html',
        styleUrls: ['./ng2-datepicker.css'],
        providers: [exports.CALENDAR_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], DatePickerComponent);
exports.DatePickerComponent = DatePickerComponent;
//# sourceMappingURL=ng2-datepicker.js.map