import { DictionaryResponse } from './nhk/dictionary-response';

export class Article {
  bodyParagraphs: string[];
  vocabulary: string[];
  dictionary: DictionaryResponse;

  constructor(
    paragraphs: string[],
    vocabulary: string[],
    dictionary: DictionaryResponse
  ) {
    this.bodyParagraphs = paragraphs;
    this.vocabulary = vocabulary;
    this.dictionary = dictionary;
  }

  hasDefinitionForKey(key: string) {
    return this.dictionary.reikai.entries[key] != null;
  }

  getDefinitionsForKey(key: string) {
    const definition = this.dictionary.reikai.entries[key];
    return definition && definition.length > 0 ? definition : null;
  }

  getTermName(key: string) {
    const definitions = this.getDefinitionsForKey(key);
    return definitions != null ? definitions[0].hyouki : null;
  }
}
