import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../models/pokemons';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})

export class PokemonDetailComponent implements OnInit {
  // ポケモンのリスト
  pokemons = POKEMONS;
  // 表示させたいポケモン
  pokemon;


  // レーダーチャート
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  // チャートのラベル
  public radarChartLabels: string[] = ['たいりょく', 'こうげき', 'ぼうぎょ', 'とくこう', 'とくぼう', 'すばやさ'];

  // レーダーチャートのデータの初期化
  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [], label: '' },
    ]
  };

  // レーダーチャートのタイプの指定
  public radarChartType: ChartType = 'radar';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadRadarGraph();
  }


  /**
   * レーダーを読み込むメソッド
   */ 
  loadRadarGraph() {
    // route.paramMap を取得する
    this.route.paramMap.subscribe(map => {
      // paramMap から id を取得し、Number オブジェクトに変換する
      const id = +map.get('id')!;
      // pokemons 配列から、id-1 番目のポケモンを取得し、pokemon 変数に代入する
      this.pokemon = this.pokemons[id - 1];
      // radarChartData オブジェクトを作成し、値を設定する
      this.radarChartData = {
        labels: this.radarChartLabels,
        datasets: [
          {
            data: [
              this.pokemon.base.HP,
              this.pokemon.base.Attack,
              this.pokemon.base.Defense,
              this.pokemon.base.SpAttack,
              this.pokemon.base.SpDefense,
              this.pokemon.base.Speed,
            ],
            label: 'グラフ'
          }]
      };
    });
  }

}


