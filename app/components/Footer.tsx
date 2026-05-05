import Link from "next/link";

import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <span className="wordmark">
              <Wordmark height={28} className="wordmark-mask" />
            </span>
            <p className="blurb">
              A small Auckland marketing agency. We help local service
              businesses across New Zealand and Australia get found online and
              chosen by local customers.
            </p>
          </div>
          <div>
            <h4>Site</h4>
            <ul>
              <li>
                <Link href="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Find us</h4>
            <ul>
              <li>
                <a href="tel:+6498844418">09-884-4418</a>
              </li>
              <li>
                <a href="mailto:team@latetwenties.agency">
                  team@latetwenties.agency
                </a>
              </li>
              <li>Auckland, New Zealand</li>
              <li>Mon to Fri, 8am to 5pm</li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/latetwenties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/latetwenties"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Latetwenties</span>
          <span>
            Based in Auckland · Working across NZ and Australia ·{" "}
            <Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
