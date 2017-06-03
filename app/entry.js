import BuildManually from './build_manually';

export default function main() {
  return {
    obj1: new BuildManually('foobar')
  }
};
