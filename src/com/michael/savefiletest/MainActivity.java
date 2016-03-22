package com.michael.savefiletest;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebChromeClient;
import android.webkit.DownloadListener;
import android.content.Intent;
import android.net.Uri;

public class MainActivity extends Activity {
    WebView webView;

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        WebView webView;

        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        WebView mainWebView = (WebView) this.findViewById(R.id.mainWebView);
        mainWebView.getSettings().setJavaScriptEnabled(true);
        mainWebView.getSettings().setDomStorageEnabled(true);
        mainWebView.getSettings().setSupportZoom(false);
        mainWebView.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        mainWebView.loadUrl("file:///android_asset/www/index.html");
        // mainWebView.setWebViewClient(new WebViewClientDemo());
        mainWebView.setWebChromeClient(new WebViewClientDemo());
        webView.setDownloadListener(new DownloadListener() {
            public void onDownloadStart(String url, String userAgent,
            String contentDisposition, String mimetype,
            long contentLength) {
                Uri uri = Uri.parse(url);
                Intent intent = new Intent(Intent.ACTION_VIEW,uri);
                startActivity(intent);
            }
        });
    }
    private class WebViewClientDemo extends WebChromeClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }
    }
}
