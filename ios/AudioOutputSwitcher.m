//
//  AudioOutputSwitcher.m
//  TeslaVoice
//
//  Created by sorin lates on 20.01.2023.
//

#import <React/RCTBridgeModule.h>
#import <AVFoundation/AVFoundation.h>

@interface AudioOutputSwitcher : NSObject <RCTBridgeModule>

@end

@implementation AudioOutputSwitcher

RCT_EXPORT_MODULE(SoundModule);

RCT_EXPORT_METHOD(switchAudioOutput) {
  NSError* error;
  AVAudioSession* session = [AVAudioSession sharedInstance];

  [session setCategory:AVAudioSessionCategoryPlayAndRecord error:&error];
  [session setMode:AVAudioSessionModeVoiceChat error:&error];

  [session overrideOutputAudioPort:AVAudioSessionPortOverrideSpeaker error:&error];
    

  [session setActive:YES error:&error];
}

@end

