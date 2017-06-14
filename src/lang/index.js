import cn from './cn';
import en from './en';
import no from './no';
import dot from 'dot-object';

export const translations = {
  cn: dot.dot(cn),
  en: dot.dot(en),
  no: dot.dot(no),
};
