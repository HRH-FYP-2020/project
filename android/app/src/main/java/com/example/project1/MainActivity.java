package com.example.project1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ProgressBar;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ProgressBar pgsBar = findViewById(R.id.progressBar);
        pgsBar.setVisibility(View.VISIBLE);

        final MediaPlayer welcome;
        welcome = MediaPlayer.create(this, R.raw.welcome);
        TextView tv = findViewById(R.id.textView);
        TextView tv1 = findViewById(R.id.textView2);
        Animation animation = AnimationUtils.loadAnimation(this, R.anim.animation);
        tv.startAnimation(animation);
        tv1.startAnimation(animation);
        final Intent i = new Intent(this, loginActivity.class);

        Thread timer = new Thread() {
            public void run() {
                try {
//                    welcome.start();
                    sleep(2500);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    startActivity(i);
                    finish();
                }
            }
        };
        timer.start();
    }
}
