package com.teslavoice;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.media.AudioDeviceInfo;
import android.media.AudioManager;
import android.os.Build;
import android.util.Log;

import androidx.annotation.RequiresApi;

import java.util.List;

public class SoundModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext mContext;
    public SoundModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "SoundModule";
    }

    @RequiresApi(api = Build.VERSION_CODES.S)
    @ReactMethod
    public void switchAudioOutput() {
        AudioManager audioManager = mContext.getSystemService(AudioManager.class);
        AudioDeviceInfo speakerDevice = null;
        List<AudioDeviceInfo> devices = audioManager.getAvailableCommunicationDevices();
         for (AudioDeviceInfo device : devices) {
             if (device.getType() == AudioDeviceInfo.TYPE_BUILTIN_SPEAKER) {
                 speakerDevice = device;
                 break;
             }
         }
         if (speakerDevice != null) {
             // Turn speakerphone ON.
                 Log.i("SoundModule", "Setting speakerphone ON");
             audioManager.setMode(AudioManager.MODE_IN_COMMUNICATION);
             boolean result = audioManager.setCommunicationDevice(speakerDevice);
             if (!result) {
                    Log.e("SoundModule", "Failed to set speakerphone ON");
             }
             // Turn speakerphone OFF.
            //  audioManager.clearCommunicationDevice();
         }
    }

}