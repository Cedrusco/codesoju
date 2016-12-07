import { Component } from '@angular/core';

@Component({
	selector: 'home-component',
	templateUrl: 'client/app/components/home/home.component.html',
	styleUrls: ['client/assets/css/home/home.css']
})
export class HomeComponent {

	/* Radar Chart Initialization */
	public radarChartLabels:string[] = ['Objects', 'Functions', 'Modules', 'Reusability', 'Duplication', 'Comments', 'Documentation'];

	public radarChartData:any = [
		{data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
		{data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
	];
	public radarChartType:string = 'radar';
	public radarChartOptions:any={
		responsive: true
	}
	public radarChartColours:Array<any> = [
	{ // grey
		backgroundColor: 'rgba(148,159,177,0.2)',
		borderColor: 'rgba(148,159,177,1)',
		pointBackgroundColor: 'rgba(148,159,177,1)',
		pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{ // blue
		backgroundColor: '#aad5f2',
		borderColor: 'rgba(148,159,177,1)',
		pointBackgroundColor: 'rgba(148,159,177,1)',
		pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	];

	public radarChartClicked(e:any):void {
		console.log(e);
	}

	public radarChartHovered(e:any):void {
		console.log(e);
	}

	/* Radar Line Chart Initialization */
	public lineChartData:Array<any> = [
		{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
		{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
	];
	public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	public lineChartOptions:any = {
		animation: false,
		responsive: true
	};
	public lineChartColours:Array<any> = [
	{ // grey
		backgroundColor: 'rgba(148,159,177,0.2)',
		borderColor: 'rgba(148,159,177,1)',
		pointBackgroundColor: 'rgba(148,159,177,1)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	},
	{ // blue
		backgroundColor: '#ffacc0',
		borderColor: 'rgba(77,83,96,1)',
		pointBackgroundColor: 'rgba(77,83,96,1)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(77,83,96,1)'
	},
	{ // red
		backgroundColor: '#aad5f2',
		borderColor: 'rgba(148,159,177,1)',
		pointBackgroundColor: 'rgba(148,159,177,1)',
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: 'rgba(148,159,177,0.8)'
	}
	];
	public lineChartLegend:boolean = true;
	public lineChartType:string = 'line';

	public randomize():void {
	if(this.lineChartData){
		let _lineChartData:Array<any> = new Array(this.lineChartData.length);
		for (let i = 0; i < this.lineChartData.length; i++) {
			_lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
			for (let j = 0; j < this.lineChartData[i].data.length; j++) {
				_lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
			}
		}
		this.lineChartData = _lineChartData;
	}
	}

	// events
	public lineChartClicked(e:any):void {
		console.log(e);
	}

	public lineChartHovered(e:any):void {
		console.log(e);
	}

	/* Bar Chart Initialization */
	public barChartOptions:any = {
		scaleShowVerticalLines: false,
		responsive: true
	};
	public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	public barChartType:string = 'bar';
	public barChartLegend:boolean = true;

	public barChartColours:Array<any> = [
	{ // grey
		backgroundColor: 'rgba(148,159,177,0.2)'
	},
	{ // dark green
		backgroundColor: '#a0efdd'
	}
  ];
	public barChartData:any[] = [
	{data: [65, 59, 80, 81, 56, 55, 40], label:'Series A'},
	{data: [28, 48, 40, 19, 86, 27, 90], label:'Series B'}
	];

	// events
	public barChartClicked(e:any):void {
		console.log(e);
	}

	public barChartHovered(e:any):void {
		console.log(e);
	}

	/* Doughnut Chart Initialization */
	public doughnutChartLabels:string[] = ['CPU used', 'Memory used', 'Storage used'];
	public doughnutChartData:number[] = [350, 450, 100];
	public doughnutChartType:string = 'doughnut';

	// events
	public doughnutChartClicked(e:any):void {
		console.log(e);
	}

	public doughnutChartHovered(e:any):void {
		console.log(e);
	}
}
