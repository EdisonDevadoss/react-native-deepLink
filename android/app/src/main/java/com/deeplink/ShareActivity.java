package com.deeplink;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.net.Uri;

public class ShareActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Uri IntentUri = Uri.parse("peopleapp://people");
        Intent intent = new Intent(Intent.ACTION_VIEW, IntentUri);
        intent.setPackage("com.deeplink");
        startActivity(intent);
    }
}
