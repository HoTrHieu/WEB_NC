export declare class StringUtil {
    private static readonly SEPARATOR;
    static countWords(text: string): number;
    static splitWords(text: string): string[];
    static makePhrases(words: string[], len: number): any[];
    static clean(text: string): string;
}
