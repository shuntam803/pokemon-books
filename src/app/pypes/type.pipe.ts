import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
})
export class TypePipe implements PipeTransform {
  // タイプを日本語で表示する
  japanese = {
    Normal: 'ノーマル',
    Fire: 'ほのお',
    Water: 'みず',
    Electric: 'でんき',
    Grass: 'くさ',
    Ice: 'こおり',
    Fighting: 'かくとう',
    Poison: 'どく',
    Ground: 'じめん',
    Flying: 'ひこう',
    Psychic: 'エスパー',
    Bug: 'むし',
    Rock: 'いわ',
    Ghost: 'ゴースト',
    Dragon: 'ドラゴン',
    Dark: 'あく',
    Steel: 'はがね',
    Fairy: 'フェアリー',
  };


  /**
   * この関数は、文字列の配列 types と、任意の数の任意の型の引数を受け取ります
   * this.japanese[type]内のタイプを日本語で返す
   * 値が見つからなかった場合、または値が false の場合は、元の英語 を返す
   * pokemon-detail.component.html で使用する
   * @param types types 配列をマップします
   * @param args  任意の数の任意の型の引数
   * @returns     処理された配列を返します
   */
  transform(types: string[], ...args: any[]): any {
    return types.map(type => this.japanese[type] || type);
  
  }

}
