import { RNOHContext, RNPackage, TurboModulesFactory } from '@rnoh/react-native-openharmony/ts'
import type { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts'
import { DocViewTurboModule } from './turborModules'

class DocViewTurboModulesFactory extends TurboModulesFactory{
  createTurboModule(name: string): TurboModule | null {
    if (name === 'RNCDocViewer') {
      return new DocViewTurboModule(this.ctx)
    }
    return null
  }
  hasTurboModule(name: string): boolean {
    return name === 'RNCDocViewer'
  }
}

export class DocViewPackage extends RNPackage{
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new DocViewTurboModulesFactory(ctx)
  }
}